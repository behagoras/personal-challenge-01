import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Offer from '../components/Offer';
import offersData from '../mocks/data.json';

const Header = styled.div``;
const Container = styled.div``;
const Main = styled.div``;

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
