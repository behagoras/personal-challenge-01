import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  width:100%;
`;
const Main = styled.main`
  margin-top:50px;

`;

const AppLayout = (props) => {
  useEffect(() => {
    // const value = [
    //   'JavaScript',
    //   'Sass',
    // ];
    // props.dispatch({
    //   type: 'FILTER',
    //   filters: value,
    // });
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </Container>
  );
};

export default connect(null)(AppLayout);
