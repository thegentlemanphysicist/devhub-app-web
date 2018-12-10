//
// Dev Hub
//
// Copyright © 2018 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Patrick Simonian on 2018-10-12.
//
const crypto = require('crypto');
const _ = require('lodash'); // eslint-disable-line
const chalk = require('chalk'); // eslint-disable-line
const { fetchFromSource, validateSourceRegistry } = require('./utils/fetchSource');
const { GRAPHQL_NODE_TYPE } = require('./utils/constants');

const createSiphonNode = (data, id) => ({
  id,
  children: [],
  fileName: data.metadata.fileName,
  fileType: data.metadata.fileType,
  name: data.metadata.name,
  owner: data.metadata.owner,
  parent: null,
  path: data.path,
  unfurl: data.metadata.unfurl, // normalized unfurled content from various sources https://medium.com/slack-developer-blog/everything-you-ever-wanted-to-know-about-unfurling-but-were-afraid-to-ask-or-how-to-make-your-e64b4bb9254
  source: {
    name: data.metadata.source, // the source-name
    displayName: data.metadata.sourceName, // the pretty name of the 'source'
    sourcePath: data.metadata.sourceURL, // the path to the source
    type: data.metadata.sourceType, // the type of the source
  },
  resource: {
    path: data.metadata.resourcePath, // either path to a gastby created page based on this node
    type: data.metadata.resourceType, // the base resource type for this see utils/constants.js
    originalSource: data.metadata.originalResourceLocation, // the original location of the resource
  },
  attributes: {
    labels: data.metadata.labels, // labels from source registry
    persona: data.metadata.persona, // persona from the source registry, see constants for valid personas
  },
  internal: {
    contentDigest: crypto
      .createHash('md5')
      .update(JSON.stringify(data))
      .digest('hex'),
    // Optional media type (https://en.wikipedia.org/wiki/Media_type) to indicate
    // to transformer plugins this node has data they can further process.
    mediaType: data.metadata.mediaType,
    // A globally unique node type chosen by the plugin owner.
    type: GRAPHQL_NODE_TYPE,
    // Optional field exposing the raw content for this node
    // that transformer plugins can take and further process.
    content: data.content,
  },
});

/**
 * loops over sources and validates them based on their type
 * @param {Array} sources the sources
 */
const sourcesAreValid = sources => sources.every(validateSourceRegistry);

/**
 * validates source registry
 * @param {Object} registry the source registry
 */
const checkRegistry = registry => {
  if (!registry.sources || !sourcesAreValid(registry.sources)) {
    throw new Error(
      'Error in Gatsby Source Github All: registry is not valid. One or more repos may be missing required parameters',
    );
  }
  return true;
};

/**
 * Filter out all nodes to get the ones specify for registry yaml file
 * @param {Function} getNodes gatsby builtin function to return all nodes
 * @param {String} SOURCE_REGISTRY_TYPE the name of the internal type refering to registry yaml source
 */
const getRegistry = (getNodes, { SOURCE_REGISTRY_TYPE }) => {
  const registryFound = getNodes().filter(node => node.internal.type === SOURCE_REGISTRY_TYPE);
  if (registryFound.length > 0) {
    return registryFound[0];
  }

  throw new Error('Registry not found');
};

/**
 * Filteres out resources that have the ignore metadata property set to true
 * @param {Array} sources
 * @returns {Array} the filtered sources
 */
const filterIgnoredResources = sources =>
  sources.filter(s => {
    if (!Object.prototype.hasOwnProperty.call(s.metadata, 'ignore') || !s.metadata.ignore) {
      return true;
    }
    console.log(
      chalk`\n The resource {green.bold ${
        s.metadata.name
      }} has been flagged as {green.bold 'ignore'} and will not have a Siphon Node created for it`,
    );
    return false;
  });

// eslint-disable-next-line consistent-return
const sourceNodes = async ({ getNodes, actions, createNodeId }, { tokens }) => {
  // get registry from current nodes
  const registry = getRegistry(getNodes, tokens);
  const { createNode } = actions;
  try {
    // check registry prior to fetching data
    checkRegistry(registry);
    // fetch all repos
    const sources = await Promise.all(
      registry.sources.map(source => fetchFromSource(source.sourceType, source, tokens)),
    );
    // sources is an array of arrays [[source data], [source data]] etc
    // so we flatten it into a 1 dimensional array
    let dataToNodify = _.flatten(sources, true);
    dataToNodify = filterIgnoredResources(dataToNodify);
    // create nodes
    return dataToNodify.map(file => createNode(createSiphonNode(file, createNodeId(file.sha))));
  } catch (e) {
    // failed to retrieve files or some other type of failure
    // eslint-disable-next-line
    console.error(e);
    throw e;
  }
};
module.exports = {
  getRegistry,
  checkRegistry,
  createSiphonNode,
  sourceNodes,
  filterIgnoredResources,
};
