import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import Header from '../Header';

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container>
        {props.children}
      </Container>
    </>
  );
};

export default Layout;