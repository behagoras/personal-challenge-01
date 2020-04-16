import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Offer from '../components/Offer';
// import offersData from '../mocks/data.json';

const Container = styled.div`
  padding: 25px;
  @media (min-width: 700px) {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

const Home = ({ filtered }) => {
  return (
    <Container>
      {
        filtered.map((offer) => <Offer key={offer.id} data={offer} />)
      }
    </Container>
  );
};

const mapStateToProps = ({ filtered }) => {
  return {
    filtered,
  };
};

export default connect(mapStateToProps)(Home);
