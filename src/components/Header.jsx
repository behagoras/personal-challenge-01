import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Filters from './Filters';

const Container = styled.header`
  width: 100%;
  position:relative;
  padding-top: 35%;

  background-color:var(--color-primary);
  background-repeat:no-repeat;
  background-image:url('https://firebasestorage.googleapis.com/v0/b/personal-challenge-01.appspot.com/o/images%2Fbg-header-mobile.svg?alt=media&token=4db40af5-fde0-4096-b399-1987a3ca1d79');

  @media (min-width: 380px) {
    padding-top: 10%;
    background-image:url('https://firebasestorage.googleapis.com/v0/b/personal-challenge-01.appspot.com/o/images%2Fbg-header-desktop.svg?alt=media&token=23fa321f-35a7-4adc-9963-7117bd8f3099');
  }
`;

const Content = styled.div`
  /* position: absolute; */
  display:${(props) => (props.show ? 'block' : 'none')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Header = (props) => (
  <>
    <Container />
    <Content show={props.filters.length > 0}>
      {
        props.filters && <Filters />
      }
    </Content>
  </>
);

const mapStateToProps = ({ filters }) => {
  return {
    filters,
  };
};

export default connect(mapStateToProps)(Header);
