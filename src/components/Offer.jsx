import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Title = styled.h2``;

const Company = styled.h3``;
const Logo = styled.img``;
const Labels = styled.div``;
const Label = styled.div`
  display:${(props) => (props.visible ? 'block' : 'none')};
`;
const Tools = styled.div``;
const Tool = styled.div`
  color:blue;
`;
const InfoList = styled.ul``;
const InfoElement = styled.li``;

const Offer = ({ data }) => {
  return (
    <Container>
      {/* <p>{data.id}</p> */}
      <Company>{data.company}</Company>
      <figure><Logo src={data.logo} /></figure>
      <Labels>
        <Label visible={data.new}>NEW!</Label>
        <Label visible={data.featured}>FEATURED!</Label>
      </Labels>
      <Title>{data.position}</Title>
      <InfoList>
        <InfoElement>{data.postedAt}</InfoElement>
        <InfoElement>{data.contract}</InfoElement>
        <InfoElement>{data.location}</InfoElement>
      </InfoList>
      <Tools>
        <Tool key={data.role}>{data.role}</Tool>
        <Tool key={data.level}>{data.level}</Tool>
        {
          data.languages ? data.languages.map((language) => <Tool key={language}>{language}</Tool>) : ''
        }
        {
          data.tools ? data.tools.map((tool) => <Tool key={tool}>{tool}</Tool>) : ''
        }
      </Tools>
      {/* <p>{data.languages}</p> */}
    </Container>
  );
};

export default Offer;
