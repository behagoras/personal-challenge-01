import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Filter from './Filter';

const Container = styled.div`
  box-shadow: 0 40px 20px hsla(180, 50%, 20%, .16), 0 3px 6px hsla(180, 50%, 20%, .23);
  background: var(--color-white);
  position: relative;
  padding: 10px;
  width: calc(100% - 20% - 23px);
  margin:-40px 10%;
  @media (min-width: 700px) {
    /* margin:0 10%; */
  }
`;

const Filters = (props) => {
  const { filters = [] } = props;
  const handleRemoveFilter = (filter) => {
    props.dispatch({
      type: 'REMOVE_FILTER',
      filter,
    });
  };
  return (
    <Container>
      {
        filters.map((filter) => <Filter removeFilter={() => { handleRemoveFilter(filter) ; }} key={filter} label={filter} />)
      }
    </Container>
  );
};

const mapStateToProps = ({ filters }) => {
  return {
    filters,
  };
};

export default connect(mapStateToProps)(Filters);
