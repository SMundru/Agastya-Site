import React from 'react';
import PropTypes from 'prop-types';
import App from '~/components/App';

const Layout = ({ children, location }) => (
  <App
    location={location}
  >
    {children}
  </App>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

export default Layout;
