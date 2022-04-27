import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Page from '../Page';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header/>
      <Page/>
      <Footer/>
    </Container>
  );
}

export default Layout;