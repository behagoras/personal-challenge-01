import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0 40px 20px hsla(180, 50%, 20%, .16), 0 3px 6px hsla(180, 50%, 20%, .23);
  border-radius:10px;
  margin-bottom: 80px;
  padding:30px;
  border-left: 7px solid var(--color-primary);
`;
const Position = styled.h2`
  margin: 0;
  font-weight: 700;
`;

const Header = styled.div`
  display: flex;
  align-items:center;
  width: 100%;
`;

const Company = styled.h3`
  margin: 20px 0;
  margin-right:20px;
  font-size: 1.3em;
  color: var(--color-primary);
`;

const Labels = styled.div``;
const Label = styled.div`
  display:${(props) => (props.show ? 'inline-block' : 'none')};
  background:${(props) => (props.type === 'new' ? 'var(--color-primary)' : 'var(--color-primary-darker)')};
  color: var(--color-white);
  padding: 5px 10px;
  border-radius:25px;
  font-weight:700;
  margin-right:10px;
`;

const Logo = styled.img`
  width: 75px;
  height: 75px;
  margin-top: -67px;

`;

const Tools = styled.div`
  border-top: 2px solid var(--color-gray-light);
  padding-top: 5px;
`;
const Tool = styled.div`
  color:var(--color-primary);
  font-weight: 700;
  letter-spacing:2px;
  background-color: var(--color-gray-light);
  padding: 10px;
  margin: 10px;
  margin-left: 0;
  border-radius:5px;
  font-size: 1.2em;
  display: inline-block;
`;
const InfoList = styled.ul`
  display:flex;
  align-items: center;
  padding: 0;
`;
const InfoElement = styled.li`
  list-style-type: none;
  margin-right: 10px;
  &:after {
    content: "•";
    margin: auto;
    margin-left: 10px;
    font-size: 1.5em;

  }
  &:last-child:after {
    content:"";
  }
`;

const Offer = ({ data }) => {
  return (
    <Container>
      {/* <p>{data.id}</p> */}
      <Logo src={data.logo} alt={data.company} />
      <Header>
        <Company>{data.company}</Company>
        <Labels>
          <Label show={data.new} type="new">NEW!</Label>
          <Label show={data.featured} type="visited">FEATURED!</Label>
        </Labels>
      </Header>
      <Position>{data.position}</Position>
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
