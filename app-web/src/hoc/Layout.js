import React, { useState, useContext, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Container } from 'reactstrap';
import Helmet from 'react-helmet';
import isEmpty from 'lodash/isEmpty';
// layout local components
import PrimaryHeader from '../components/PrimaryHeader/PrimaryHeader';
import PrimaryFooter from '../components/PrimaryFooter/PrimaryFooter';
import { Navbar } from '../components/Navbar/Navbar';
import AuthContext from '../AuthContext';
import { createIam } from '../auth';
import { MAIN_NAV_ROUTE_LIST } from '../constants/routes';

const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
`;

const Wrapper = styled.div`
  margin-top: 65px;
  flex-grow: 1;
  ${props => props.theme.breakpoints.main.desktop} {
    margin-top: 112px;
  }
`;

export const Layout = ({ children }) => {
  const [menuToggled, setMenuToggled] = useState(false);
  const [iam, setIam] = useState(null);
  useEffect(() => {
    // unable to createIam on build time since it requires the window object which is not available
    // during a gatsby build, therefore we need to useEffect
    setIam(createIam());
    return () => {
      setIam(null);
    };
  }, [iam]);
  const { auth } = useContext(AuthContext);
  const authenticated = !auth || !isEmpty(auth);

  return (
    <StyledContainer fluid>
      {/* This is to fix the some of the issues occuring on EI 11, specifically the nav issues*/}
      <Helmet>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      </Helmet>
      <PrimaryHeader
        authenticated={authenticated}
        showHamburger
        hamburgerClicked={() => setMenuToggled(!menuToggled)}
      />

      <Navbar
        authenticated={authenticated}
        links={MAIN_NAV_ROUTE_LIST}
        toggled={menuToggled}
        implicitAuthManager={iam}
      />

      <Wrapper>{children}</Wrapper>
      <PrimaryFooter />
    </StyledContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const query = graphql`
  fragment DevhubNodeConnection on ConnectedNode {
    path
    fields {
      position
      resourceType
      title
      description
      standAlonePath
      path
    }
    id
  }
`;
export default Layout;
