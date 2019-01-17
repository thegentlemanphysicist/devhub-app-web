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

// sample files that may be received when calling github v3 tree api
// seperating them out in this obj so that we can recycle some of these properties
// in tests as well as other fixtures

const { COLLECTION_TEMPLATES } = require('../utils/constants');

const TREE_FILES = {
  FILE1: {
    path: 'docs/readme1.md',
    mode: '100644',
    type: 'blob',
    sha: 'c18275f23c101c5bf62ab9a4a332b774db37dfd1',
    size: 857,
    url:
      'https://api.github.com/repos/bcgov/range-web/git/blobs/c18275f23c101c5bf62ab9a4a332b774db37dfd1',
  },
  FILE2: {
    path: 'docs/readme2.md',
    mode: '100644',
    type: 'blob',
    sha: 'c18275f23c101c5bf62ab9a4a332b774db37dfd1',
    size: 857,
    url:
      'https://api.github.com/repos/bcgov/range-web/git/blobs/c18275f23c101c5bf62ab9a4a332b774db37dfd1',
  },
  FILE3: {
    path: 'docs/readme3.md',
    mode: '100644',
    type: 'blob',
    sha: 'c18275f23c101c5bf62ab9a4a332b774db37dfd1',
    size: 857,
    url:
      'https://api.github.com/repos/bcgov/range-web/git/blobs/c18275f23c101c5bf62ab9a4a332b774db37dfd1',
  },
};

const GITHUB_API = {
  // the actual tree object returns from github tree api
  TREE: {
    sha: 'fd0a8ca2b638662d565a20ba2947678e4fd3acee',
    url:
      'https://api.github.com/repos/bcgov/range-web/git/trees/fd0a8ca2b638662d565a20ba2947678e4fd3acee',
    tree: [
      {
        path: '.eslintrc',
        mode: '100644',
        type: 'blob',
        sha: 'c18275f23c101c5bf62ab9a4a332b774db37dfd1',
        size: 857,
        url:
          'https://api.github.com/repos/bcgov/range-web/git/blobs/c18275f23c101c5bf62ab9a4a332b774db37dfd1',
      },
      TREE_FILES.FILE1,
      TREE_FILES.FILE2,
      TREE_FILES.FILE3,
      {
        path: '.gitignore',
        mode: '100644',
        type: 'blob',
        sha: '23565d52b59af65bd5c315562473ad1503b80383',
        size: 374,
        url:
          'https://api.github.com/repos/bcgov/range-web/git/blobs/23565d52b59af65bd5c315562473ad1503b80383',
      },
      {
        path: '.s2i',
        mode: '040000',
        type: 'tree',
        sha: '9c3b4725dd226c2c1d842431676527735969364e',
        url:
          'https://api.github.com/repos/bcgov/range-web/git/trees/9c3b4725dd226c2c1d842431676527735969364e',
      },
      {
        path: '.s2i/bin',
        mode: '040000',
        type: 'tree',
        sha: '7c6076979af44eab33b12e04229aad2df3c6af29',
        url:
          'https://api.github.com/repos/bcgov/range-web/git/trees/7c6076979af44eab33b12e04229aad2df3c6af29',
      },
      {
        path: '.s2i/bin/assemble',
        mode: '100644',
        type: 'blob',
        sha: '8416cd99d38e00246edc8fea9d5c731d39984932',
        size: 164,
        url:
          'https://api.github.com/repos/bcgov/range-web/git/blobs/8416cd99d38e00246edc8fea9d5c731d39984932',
      },
      {
        path: 'Caddyfile',
        mode: '100644',
        type: 'blob',
        sha: '3d14e2f56345aac8dac9a3be28a810b65273af3c',
        size: 145,
        url:
          'https://api.github.com/repos/bcgov/range-web/git/blobs/3d14e2f56345aac8dac9a3be28a810b65273af3c',
      },
    ],
  },
  // sample return from github contents api
  FILE: {
    ___metadata: {},
    name: 'manifest.json',
    path: 'public/manifest.json',
    sha: 'ef19ec243e739479802a5553d0b38a18ed845307',
    size: 317,
    url: 'https://api.github.com/repos/bcgov/range-web/contents/public/manifest.json?ref=master',
    html_url: 'https://github.com/bcgov/range-web/blob/master/public/manifest.json',
    git_url:
      'https://api.github.com/repos/bcgov/range-web/git/blobs/ef19ec243e739479802a5553d0b38a18ed845307',
    download_url: 'https://raw.githubusercontent.com/bcgov/range-web/master/public/manifest.json',
    type: 'file',
    content:
      '{\n  "short_name": "React App",\n  "name": "Create React App Sample",\n  "icons": [\n    {\n      "src": "favicon.ico",\n      "sizes": "64x64 32x32 24x24 16x16",\n      "type": "image/x-icon"\n    }\n  ],\n  "start_url": "./index.html",\n"display": "standalone",\n  "theme_color": "#000000",\n  "background_color": "#ffffff"\n}\n',
    encoding: 'base64',
    _links: {
      self: 'https://api.github.com/repos/bcgov/range-web/contents/public/manifest.json?ref=master',
      git:
        'https://api.github.com/repos/bcgov/range-web/git/blobs/ef19ec243e739479802a5553d0b38a18ed845307',
      html: 'https://github.com/bcgov/range-web/blob/master/public/manifest.json',
    },
  },
  // sample file from github contents file missing description front matter
  BAD_MD_FILE: {
    metadata: {
      position: [0, 0],
    },
    name: 'badfile.md',
    path: 'public/badfile.md',
    sha: 'ef19ec243e739479802a5553d0b38a18ed845307',
    size: 317,
    url: 'https://api.github.com/repos/bcgov/range-web/contents/public/badfile.md?ref=master',
    html_url: 'https://github.com/bcgov/range-web/blob/master/public/badfile.md',
    git_url:
      'https://api.github.com/repos/bcgov/range-web/git/blobs/ef19ec243e739479802a5553d0b38a18ed845307',
    download_url: 'https://raw.githubusercontent.com/bcgov/range-web/master/public/badfile.md',
    type: 'file',
    content: '---\ntitle: yoyoyo\n---\n# markdown',
    encoding: 'base64',
    _links: {
      self: 'https://api.github.com/repos/bcgov/range-web/contents/public/badfile.md?ref=master',
      git:
        'https://api.github.com/repos/bcgov/range-web/git/blobs/ef19ec243e739479802a5553d0b38a18ed845307',
      html: 'https://github.com/bcgov/range-web/blob/master/public/badfile.md',
    },
  },
  // sample return from a failed github contents api get request
  FAIL: {
    message: 'Not Found',
    documentation_url: 'https://developer.github.com/v3',
  },
  // sameple .devhubignore file from github contents api
  IGNORE_FILE: {
    content: 'file1\nfile2\nfile3',
  },
};

// file after being processed through fetchsourcegithub
const PROCESSED_FILE_HTML = {
  name: 'index.html',
  path: 'components/header/index.html',
  sha: 'dfdfas123',
  size: 2562,
  url:
    'https://api.github.com/repos/bcgov/design-system/contents/components/header/index.html?ref=master',
  html_url: 'https://github.com/bcgov/design-system/blob/master/components/header/index.html',
  git_url:
    'https://api.github.com/repos/bcgov/design-system/git/blobs/1b0260c9b456f68d0443d0194ea84ed76e3d3041',
  download_url:
    'https://raw.githubusercontent.com/bcgov/design-system/master/components/header/index.html',
  type: 'file',
  content: '<!DOCTYPE><html><head></head><body><h1>Hello World!</h1></body></html>',
  encoding: 'base64',
  _links: {
    self:
      'https://api.github.com/repos/bcgov/design-system/contents/components/header/index.html?ref=master',
    git:
      'https://api.github.com/repos/bcgov/design-system/git/blobs/1b0260c9b456f68d0443d0194ea84ed76e3d3041',
    html: 'https://github.com/bcgov/design-system/blob/master/components/header/index.html',
  },
  metadata: {
    sourceName: 'Design System',
    source: 'design-system',
    owner: 'bcgov',
    name: 'README',
    fileType: 'Markdown',
    fileName: 'README.md',
    mediaType: 'text/markdown',
    extension: 'md',
    collection: {
      name: 'foo',
      type: 'bar',
    },
  },
};

// with resource path frontmatter, this file is destined not to create a page but
// rather have a hyperlink to an external resource. That external resource is actually
// unfurled by one of the file transformer plugins
const RAW_FILE_MD_WITH_RESOURCEPATH = {
  ___metadata: {
    position: [0, 0],
  },
  name: 'README.md',
  path: 'components/header/README.md',
  sha: '123asdlfjasdf123',
  size: 2562,
  url:
    'https://api.github.com/repos/bcgov/design-system/contents/components/header/README.md?ref=master',
  html_url: 'https://github.com/bcgov/design-system/blob/master/components/header/README.md',
  git_url:
    'https://api.github.com/repos/bcgov/design-system/git/blobs/1b0260c9b456f68d0443d0194ea84ed76e3d3041',
  download_url:
    'https://raw.githubusercontent.com/bcgov/design-system/master/components/header/README.md',
  type: 'file',
  content:
    '---\nresourcePath: https://example.com\nsomething: {\n a: true\n}\ndescription: Headers help users understand what the content of the page is about and provides a quick, organized way toreach the main sections of a website.\n---\n# Header\n\nHeaders help users understand what the content of the page is about and provide a quick, organized way to reach the main sections of a website. They appear at the top of a page, above the main body text.\n\n### Required\n\n## Visual\n\n![Screenshot][screenshot]\n\n## Use This For\n\nAll public facing online BC Government content and services.\n\n## Don\'t Use This For\n\nNon BC Government online content or services\n\nConsider using an extended header if you have more sections in your website or if you have complex sections that require the use of a mega menu.\n\n## Rationale\n\nThis header is the most up-to-date versionmeeting all government standards, branding, and accessibility requirements.\n\n## Behaviour\n\n1. Clicking on BC Government logo links back to homepage\n2. Site title reduces through three increments as browser window gets smaller\n3. After third increment site title disappears completely\n4. BC Gov logo does not change size or disappear as browser window gets smaller\n\n## Accessibility\n\nThis header has been built and successfully tested for the following\n\nColour Impairment\nGrayscale\nKeyboard Accessibility\nScreen Readers\nTab Navigation\n\n## Code\n\nFor fonts and a standard browser reset include the following links in the `<header>` of your page.\n\n```html\n<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-reboot.min.css" rel="stylesheet">\n<link href="https://fonts.googleapis.com/css?family=PT Sans" rel="stylesheet">\n```\n\n### HTML\n\n```html\n<header>\n  <div class="banner">\n      <a href="https://gov.bc.ca" alt="British Columbia">\n        <img src="../assets/images/logo-banner.png" alt="logo" />\n      </a>\n      <h1>HelloBritish Columbia</h1>\n  </div>\n  <div class="other">\n    <!-- This place is for anything that needs to be right aligned beside the logo. -->\n    &nbsp;\n  </div>\n  </div>\n</header>\n```\n    \n### CSS\n\n```css\nheader {\n  background-color: #036;\n  border-bottom: 2px solid #fcba19;\n  padding: 0 65px 0 65px;\n  color: #fff;\n  display: flex;\n  height: 65px;\n}\n\nheader h1 {\n  font-family: \'PT Sans\';\n  font-weight: normal;  /* 400 */\n  margin: 5px 5px 0 18px;\n  visibility: hidden;\n}\n\nheader .banner {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0 10px 0 0;\n}\n\nheader .other {\n  display: flex;\n  flex-grow: 1;\n}\n```\n\n_Last Updated: 2018-10-19_\n\n[screenshot]: images/header.png "Screenshot"\n',
  encoding: 'base64',
  _links: {
    self:
      'https://api.github.com/repos/bcgov/design-system/contents/components/header/README.md?ref=master',
    git:
      'https://api.github.com/repos/bcgov/design-system/git/blobs/1b0260c9b456f68d0443d0194ea84ed76e3d3041',
    html: 'https://github.com/bcgov/design-system/blob/master/components/header/README.md',
  },
  metadata: {
    sourceName: 'Design System',
    source: 'design-system',
    owner: 'bcgov',
    name: 'README',
    fileType: 'Markdown',
    fileName: 'README.md',
    mediaType: 'text/markdown',
    extension: 'md',
  },
};
// without resource path frontmatter
const RAW_FILE_MD = {
  ___metadata: {
    position: [0, 0],
  },
  name: 'README.md',
  path: 'components/header/README.md',
  sha: '123asdlfjasdf123',
  size: 2562,
  url:
    'https://api.github.com/repos/bcgov/design-system/contents/components/header/README.md?ref=master',
  html_url: 'https://github.com/bcgov/design-system/blob/master/components/header/README.md',
  git_url:
    'https://api.github.com/repos/bcgov/design-system/git/blobs/1b0260c9b456f68d0443d0194ea84ed76e3d3041',
  download_url:
    'https://raw.githubusercontent.com/bcgov/design-system/master/components/header/README.md',
  type: 'file',
  content:
    '---\nsomething: {\n a: true\n}\ndescription: Headers help users understand what the content of the page is about and provides a quick, organized way toreach the main sections of a website.\n---\n# Header\n\nHeaders help users understand what the content of the page is about and provide a quick, organized way to reach the main sections of a website. They appear at the top of a page, above the main body text.\n\n### Required\n\n## Visual\n\n![Screenshot][screenshot]\n\n## Use This For\n\nAll public facing online BC Government content and services.\n\n## Don\'t Use This For\n\nNon BC Government online content or services\n\nConsider using an extended header if you have more sections in your website or if you have complex sections that require the use of a mega menu.\n\n## Rationale\n\nThis header is the most up-to-date versionmeeting all government standards, branding, and accessibility requirements.\n\n## Behaviour\n\n1. Clicking on BC Government logo links back to homepage\n2. Site title reduces through three increments as browser window gets smaller\n3. After third increment site title disappears completely\n4. BC Gov logo does not change size or disappear as browser window gets smaller\n\n## Accessibility\n\nThis header has been built and successfully tested for the following\n\nColour Impairment\nGrayscale\nKeyboard Accessibility\nScreen Readers\nTab Navigation\n\n## Code\n\nFor fonts and a standard browser reset include the following links in the `<header>` of your page.\n\n```html\n<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-reboot.min.css" rel="stylesheet">\n<link href="https://fonts.googleapis.com/css?family=PT Sans" rel="stylesheet">\n```\n\n### HTML\n\n```html\n<header>\n  <div class="banner">\n      <a href="https://gov.bc.ca" alt="British Columbia">\n        <img src="../assets/images/logo-banner.png" alt="logo" />\n      </a>\n      <h1>HelloBritish Columbia</h1>\n  </div>\n  <div class="other">\n    <!-- This place is for anything that needs to be right aligned beside the logo. -->\n    &nbsp;\n  </div>\n  </div>\n</header>\n```\n    \n### CSS\n\n```css\nheader {\n  background-color: #036;\n  border-bottom: 2px solid #fcba19;\n  padding: 0 65px 0 65px;\n  color: #fff;\n  display: flex;\n  height: 65px;\n}\n\nheader h1 {\n  font-family: \'PT Sans\';\n  font-weight: normal;  /* 400 */\n  margin: 5px 5px 0 18px;\n  visibility: hidden;\n}\n\nheader .banner {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0 10px 0 0;\n}\n\nheader .other {\n  display: flex;\n  flex-grow: 1;\n}\n```\n\n_Last Updated: 2018-10-19_\n\n[screenshot]: images/header.png "Screenshot"\n',
  encoding: 'base64',
  _links: {
    self:
      'https://api.github.com/repos/bcgov/design-system/contents/components/header/README.md?ref=master',
    git:
      'https://api.github.com/repos/bcgov/design-system/git/blobs/1b0260c9b456f68d0443d0194ea84ed76e3d3041',
    html: 'https://github.com/bcgov/design-system/blob/master/components/header/README.md',
  },
  metadata: {
    sourceName: 'Design System',
    source: 'design-system',
    owner: 'bcgov',
    name: 'README',
    fileType: 'Markdown',
    fileName: 'README.md',
    mediaType: 'text/markdown',
    extension: 'md',
    collection: {
      name: 'foo',
      type: 'bar',
    },
  },
};

const PROCESSED_FILE_MD = {
  name: 'README.md',
  path: 'components/header/README.md',
  sha: '123asdlfjasdf123',
  size: 2562,
  url:
    'https://api.github.com/repos/bcgov/design-system/contents/components/header/README.md?ref=master',
  html_url: 'https://github.com/bcgov/design-system/blob/master/components/header/README.md',
  git_url:
    'https://api.github.com/repos/bcgov/design-system/git/blobs/1b0260c9b456f68d0443d0194ea84ed76e3d3041',
  download_url:
    'https://raw.githubusercontent.com/bcgov/design-system/master/components/header/README.md',
  type: 'file',
  content:
    '---\nsomething: {\n a: true\n}\ndescription: Headers help users understand what the content of the page is about and provides a quick, organized way toreach the main sections of a website.\n---\n# Header\n\nHeaders help users understand what the content of the page is about and provide a quick, organized way to reach the main sections of a website. They appear at the top of a page, above the main body text.\n\n### Required\n\n## Visual\n\n![Screenshot][screenshot]\n\n## Use This For\n\nAll public facing online BC Government content and services.\n\n## Don\'t Use This For\n\nNon BC Government online content or services\n\nConsider using an extended header if you have more sections in your website or if you have complex sections that require the use of a mega menu.\n\n## Rationale\n\nThis header is the most up-to-date versionmeeting all government standards, branding, and accessibility requirements.\n\n## Behaviour\n\n1. Clicking on BC Government logo links back to homepage\n2. Site title reduces through three increments as browser window gets smaller\n3. After third increment site title disappears completely\n4. BC Gov logo does not change size or disappear as browser window gets smaller\n\n## Accessibility\n\nThis header has been built and successfully tested for the following\n\nColour Impairment\nGrayscale\nKeyboard Accessibility\nScreen Readers\nTab Navigation\n\n## Code\n\nFor fonts and a standard browser reset include the following links in the `<header>` of your page.\n\n```html\n<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-reboot.min.css" rel="stylesheet">\n<link href="https://fonts.googleapis.com/css?family=PT Sans" rel="stylesheet">\n```\n\n### HTML\n\n```html\n<header>\n  <div class="banner">\n      <a href="https://gov.bc.ca" alt="British Columbia">\n        <img src="../assets/images/logo-banner.png" alt="logo" />\n      </a>\n      <h1>HelloBritish Columbia</h1>\n  </div>\n  <div class="other">\n    <!-- This place is for anything that needs to be right aligned beside the logo. -->\n    &nbsp;\n  </div>\n  </div>\n</header>\n```\n    \n### CSS\n\n```css\nheader {\n  background-color: #036;\n  border-bottom: 2px solid #fcba19;\n  padding: 0 65px 0 65px;\n  color: #fff;\n  display: flex;\n  height: 65px;\n}\n\nheader h1 {\n  font-family: \'PT Sans\';\n  font-weight: normal;  /* 400 */\n  margin: 5px 5px 0 18px;\n  visibility: hidden;\n}\n\nheader .banner {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0 10px 0 0;\n}\n\nheader .other {\n  display: flex;\n  flex-grow: 1;\n}\n```\n\n_Last Updated: 2018-10-19_\n\n[screenshot]: images/header.png "Screenshot"\n',
  encoding: 'base64',
  _links: {
    self:
      'https://api.github.com/repos/bcgov/design-system/contents/components/header/README.md?ref=master',
    git:
      'https://api.github.com/repos/bcgov/design-system/git/blobs/1b0260c9b456f68d0443d0194ea84ed76e3d3041',
    html: 'https://github.com/bcgov/design-system/blob/master/components/header/README.md',
  },
  metadata: {
    sourceName: 'Design System',
    source: 'design-system',
    owner: 'bcgov',
    name: 'README',
    fileType: 'Markdown',
    fileName: 'README.md',
    mediaType: 'text/markdown',
    extension: 'md',
    globalPersona: 'Designer',
    collection: {
      name: 'foo',
      type: 'bar',
    },
  },
};

const PROCESSED_FILE_TXT = {
  name: 'README.txt',
  path: 'components/header/README.txt',
  sha: '123asdlfjasdf123',
  size: 2562,
  url:
    'https://api.github.com/repos/bcgov/design-system/contents/components/header/README.md?ref=master',
  html_url: 'https://github.com/bcgov/design-system/blob/master/components/header/README.md',
  git_url:
    'https://api.github.com/repos/bcgov/design-system/git/blobs/1b0260c9b456f68d0443d0194ea84ed76e3d3041',
  download_url:
    'https://raw.githubusercontent.com/bcgov/design-system/master/components/header/README.md',
  type: 'file',
  content: 'this is a readme',
  encoding: 'base64',
  _links: {
    self:
      'https://api.github.com/repos/bcgov/design-system/contents/components/header/README.md?ref=master',
    git:
      'https://api.github.com/repos/bcgov/design-system/git/blobs/1b0260c9b456f68d0443d0194ea84ed76e3d3041',
    html: 'https://github.com/bcgov/design-system/blob/master/components/header/README.md',
  },
  metadata: {
    sourceName: 'Design System',
    source: 'design-system',
    owner: 'bcgov',
    name: 'README',
    fileType: 'Markdown',
    fileName: 'README.txt',
    mediaType: 'text/markdown',
    extension: 'txt',
    collection: {
      name: 'foo',
      type: 'bar',
    },
  },
};

// a sample registry file that has been processed by the gatsby-source-filesystem/gatbsy-transformer-yaml plugins
const REGISTRY = {
  id: '/registry.yml absPath of file >>> YAML',
  sources: [
    {
      name: 'Design System',
      sourceType: 'github',
      sourceProperties: {
        owner: 'bcgov',
        repo: 'design-system',
        url: 'https://github.com/bcgov/design-system/',
      },
      attributes: {
        labels: ['components'],
      },
    },
  ],
  internal: {
    contentDigest: '520538ca86778e449b1db66100137431',
    type: 'SourceRegistryYaml',
    owner: 'gatsby-transformer-yaml',
  },
};

// same as above but this registry contains a 'collection' type config
const REGISTRY_WITH_COLLECTION = {
  id: '/registry.yml absPath of file >>> YAML',
  sources: [
    {
      name: 'Design System',
      sourceProperties: {
        sources: [
          {
            sourceType: 'github',
            sourceProperties: {
              owner: 'bcgov',
              repo: 'design-system',
              url: 'https://github.com/bcgov/design-system/',
            },
          },
          {
            sourceType: 'github',
            sourceProperties: {
              owner: 'bcgov',
              repo: 'design-system',
              url: 'https://github.com/bcgov/design-system/',
            },
          },
        ],
      },
      attributes: {
        labels: ['components'],
      },
    },
  ],
  internal: {
    contentDigest: '520538ca86778e449b1db66100137431',
    type: 'SourceRegistryYaml',
    owner: 'gatsby-transformer-yaml',
  },
};

// the result of an allFile graphql query, it is filtered in sourceNodes.js to find only the registry file
// that matches the option passed into this source plugin
const GRAPHQL_NODES_WITH_REGISTRY = [
  {
    id: '/registry.yml absPath of file >>> YAML',
    sources: REGISTRY.sources.concat(REGISTRY_WITH_COLLECTION.sources),
    internal: {
      contentDigest: '520538ca86778e449b1db66100137431',
      type: 'SourceRegistryYaml',
      owner: 'gatsby-transformer-yaml',
    },
  },
  {
    internal: {
      type: 'SourceFile',
    },
  },
  {
    internal: {
      type: 'SourceFile',
    },
  },
];

// for testing when registry doesn't exist/can't be found
const GRAPHQL_NODES_WITHOUT_REGISTRY = [
  {
    internal: {
      type: 'SourceFile',
    },
  },
  {
    internal: {
      type: 'SourceFile',
    },
  },
];

//  a sample registry 'item'
const GITHUB_SOURCE = {
  metadata: {
    position: [0, 0],
  },
  name: 'Design System',
  sourceType: 'github',
  sourceProperties: {
    owner: 'bcgov',
    repo: 'design-system',
    url: 'https://github.com/bcgov/design-system/',
  },
  attributes: {
    labels: ['components'],
  },
};
// sample web source registry item
const WEB_SOURCE = {
  metadata: {
    position: [0, 0],
  },
  name: 'Foo',
  sourceType: 'web',
  sourceProperties: {
    url: 'https://google.com',
  },
  attributes: {
    persona: 'Developer',
  },
};

// another sample registry 'item'
const GITHUB_SOURCE_WITHIN_INLINE_IGNORES = {
  name: 'Design System',
  metadata: {
    position: [0, 0],
  },
  sourceType: 'github',
  sourceProperties: {
    owner: 'bcgov',
    repo: 'design-system',
    url: 'https://github.com/bcgov/design-system/',
    ignores: ['docs/readme1.md'],
  },
  attributes: {
    labels: ['components'],
  },
};

// sample config options passed into this source plugin from gatsby-config.js
const CONFIG_OPTIONS = {
  tokens: {
    GITHUB_API_TOKEN: '123',
  },
  sourceRegistryType: 'SourceRegistryYaml',
};

const PROCESSED_WEB_SOURCE = {
  metadata: {
    unfurl: {
      author: 'foo',
      description: 'bar',
      image: null,
      label1: null,
      value1: null,
      label2: null,
      value2: null,
    },
    resourceType: 'Documentation',
    sourceType: 'web',
    name: 'web source',
    attributes: {
      persona: 'Developer',
    },
    collection: {
      name: 'web source',
      type: 'source',
    },
    resourcePath: 'https://example.com',
    originalResourceLocation: 'https://example.com',
    fileName: null,
    fileType: null,
    owner: 'foo',
    mediaType: 'text/html', // hmm not too sure what should be considered the best media type
  },
  path: 'https://example.com',
};

// different from the registry with the collection,
// when the collection is processed through the fetch queue
// the type property is bound to it based on conditions
const COLLECTION_OBJ_FROM_FETCH_QUEUE = {
  type: 'curated',
  name: 'foo',
  description: 'blah',
  sources: [WEB_SOURCE],
  template: COLLECTION_TEMPLATES.DEFAULT,
  metadata: {
    position: [0],
  },
};

module.exports = {
  COLLECTION_OBJ_FROM_FETCH_QUEUE,
  GITHUB_API,
  PROCESSED_FILE_MD,
  PROCESSED_FILE_TXT,
  PROCESSED_FILE_HTML,
  PROCESSED_WEB_SOURCE,
  RAW_FILE_MD,
  RAW_FILE_MD_WITH_RESOURCEPATH,
  GRAPHQL_NODES_WITH_REGISTRY,
  GRAPHQL_NODES_WITHOUT_REGISTRY,
  REGISTRY,
  REGISTRY_WITH_COLLECTION,
  GITHUB_SOURCE,
  WEB_SOURCE,
  GITHUB_SOURCE_WITHIN_INLINE_IGNORES,
  CONFIG_OPTIONS,
  TREE_FILES,
};
