import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.main`
  margin-bottom:150px;
`;

const AppLayout = (props) => {

  useEffect(() => {
    const value = [
      'HTML',
      'Senior',
    ];
    props.dispatch({
      type: 'FILTER',
      filter: value,
    });
  }, []);

  return (
    <div>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </div>
  );
};

export default connect(null)(AppLayout);
