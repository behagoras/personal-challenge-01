import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.main`
  margin-bottom:150px;
`;

const AppLayout = (props) => (
  <div>
    <Header />
    <Main>
      {props.children}
    </Main>
    <Footer />
  </div>
);

export default AppLayout;
