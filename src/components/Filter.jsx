import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
  margin-left: 0;
  display: inline-flex;
`;
const Tool = styled.div`
  color: var(--color-primary);
  font-weight: 700;
  letter-spacing: 2px;
  background-color: var(--color-gray-light);
  padding: 10px;
  border-radius: 5px;
  font-size: .8em;
  cursor:pointer;
`;
const Button = styled.button`
  background: var(--color-primary);
  height: 32px;
  width: 32px;
  border: none;
  color: var(--color-white);
`;
const Filter = ({ onClick = () => {}, label = '', className, removeFilter }) => {
  return (
    <Container>
      <Tool className={className} onClick={onClick}>
        {label}
      </Tool>
      {
        removeFilter && <Button onClick={removeFilter}>x</Button>
      }
    </Container>
  );
};

export default Filter;
