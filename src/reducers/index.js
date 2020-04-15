/* eslint-disable no-case-declarations */
// import actions from '../actions';
const filterState = (original, filters) => {
  return original.filter((offer) => {
    // offer = Every offer in the state.original
    // console.log('reducer -> offer', offer);
    return filters.filter((filter) => {
      // filter = Every filter in action.filters
      // console.log('reducer -> filter', filter);
      return offer.filtrable.includes(filter); // return an array of the times where the filtrable Object contains the filters
    }).length === filters.length; // If the filters are the same as the filtrable Object filtered by the filters, return the repetition.
  });
};
function reducer(state = [], action) {
  let filters;
  switch (action.type) {
    case 'FILTER':
      // return { ...state,
      //   filtered: state.original.filter((offer) => {
      //     return offer.filtrable.includes(...action.filter);
      //   }),
      // };

      return {
        ...state,
        filtered: filterState(state.original, action.filters),
        filters: action.filters,
      };
    case 'SET_STATE':
      return action.payload;
    case 'ADD_FILTER':
      filters = state.filters.filter((filter) => action.filter === filter).push(action.filter);
      return {
        ...state,
        filters,
        filtered: filterState(state.original, filters),
      };
    case 'REMOVE_FILTER':
      filters = state.filters.filter((filter) => action.filter === filter).push(action.filter);
      return {
        ...state,
        filters,
        filtered: filterState(state.original, filters),
      };
    default:
      return state;
  }
}

export default reducer;
