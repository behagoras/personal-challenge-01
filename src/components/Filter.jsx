import React from 'react';
import styled from 'styled-components';

const Tool = styled.div`
  margin: 10px;
  margin-left: 0;
  color: var(--color-primary);
  font-weight: 700;
  letter-spacing: 2px;
  background-color: var(--color-gray-light);
  padding: 10px;

  border-radius: 5px;
  font-size: .8em;
  display: inline-block;
  @media (min-width: 700px) {
    /* float: right; */
  }
`;
const Button = styled.button``;
const Filter = ({ onClick = () => {}, label = '', className, removeFilter }) => {
  return (
    <Tool className={className} onClick={onClick}>
      {label}
      {
        removeFilter && <Button onClick={removeFilter}>x</Button>
      }
    </Tool>
  );
};

export default Filter;
