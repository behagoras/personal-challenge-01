import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Offer from '../components/Offer';
import offersData from '../mocks/data.json';

const Container = styled.div`
  padding: 25px;
  @media (min-width: 700px) {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

const Home = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    setOffers(offersData);
  }, []);
  return (
    <Container>
      {
        offers.map((offer) => <Offer key={offer.id} data={offer} />)
      }
    </Container>
  );
};

export default Home;
