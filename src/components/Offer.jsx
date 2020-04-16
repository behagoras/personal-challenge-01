import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Filter from './Filter';

const Container = styled.div`
  box-shadow: 0 40px 20px hsla(180, 50%, 20%, .16), 0 3px 6px hsla(180, 50%, 20%, .23);
  border-radius: 10px;
  margin-bottom: 80px;
  padding: 30px;
  border-left: 7px solid var(--color-primary);
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: 75px 320px 1fr;
    grid-gap: 30px;
  }
`;

const Position = styled.h2`
  margin: 0;
  font-weight: 700;
  color: var(--color-primary);
  @media (min-width: 700px) {
    margin: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: 700px) {
    margin: 0;
  }
`;

const Company = styled.h3`
  margin: 20px 0;
  margin-right: 10px;
  font-size: 1em;
  color: var(--color-primary);
  @media (min-width: 700px) {
    margin: 10px 0;
    margin-right: 10px;
  }
`;

const Labels = styled.div``;

const Label = styled.div`
  display: ${(props) => (props.show ? 'inline-block' : 'none')};
  background: ${(props) => (props.type === 'new' ? 'var(--color-primary)' : 'var(--color-primary-darker)')};
  color: var(--color-white);
  padding: 5px 10px;
  border-radius: 25px;
  font-weight: 700;
  margin-right: 10px;
  font-size: .7em;
  @media (min-width: 700px) {
    margin-right: 5px;
  }
`;

const Logo = styled.img`
  width: 75px;
  height: 75px;
  margin-top: -67px;
  @media (min-width: 700px) {
    margin: 0;
  }
`;

const Tools = styled.div`
  border-top: 2px solid var(--color-gray-light);
  padding-top: 5px;
  @media (min-width: 700px) {
    border: 0;
    padding: 0;
    display: block;
    margin: auto 0;
    align-items: center;
    justify-content: flex-end;
  }
`;

const Tool = styled.div`
  color: var(--color-primary);
  font-weight: 700;
  letter-spacing: 2px;
  background-color: var(--color-gray-light);
  padding: 10px;
  margin: 10px;
  margin-left: 0;
  border-radius: 5px;
  font-size: .8em;
  display: inline-block;
  @media (min-width: 700px) {
    float: right;
  }
`;

const InfoList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  @media (min-width: 700px) {
    margin: 0;
  }
`;

const InfoElement = styled.li`
  list-style-type: none;
  margin-right: 10px;
  color: var(--color-primary-dark);
  font-size: .8em;
  &:after {
    content: "•";
    margin: auto;
    margin-left: 10px;
    font-size: 1.5em;
  }
  &:last-child:after {
    content: "";
  }
`;

const Data = styled.div`
  @media (min-width: 700px) {}
`;

const Offer = (props) => {
  const handleClick = (filter) => {
    console.log(filter);
    props.dispatch({
      type: 'ADD_FILTER',
      filter,
    });
  };
  const { data } = props;
  return (
    <Container>
      {/* <p>{data.id}</p> */}
      <Logo src={data.logo} alt={data.company} />
      <Data>
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
      </Data>

      <Tools>
        <Filter onClick={() => { handleClick(data.role); }} key={data.role} label={data.role}>{data.role}</Filter>
        <Filter onClick={() => { handleClick(data.level); }} key={data.level} label={data.level}>{data.level}</Filter>
        {
          data.languages ? data.languages.map((language) => (
            <Filter onClick={() => { handleClick(language); }} key={language} label={language}>
              {language}
            </Filter>
          )) : ''
        }
        {
          data.tools ? data.tools.map((tool) => <Filter onClick={() => { handleClick(tool); }} key={tool} label={tool} />) : ''
        }
      </Tools>
    </Container>
  );
};

export default connect(null)(Offer);
