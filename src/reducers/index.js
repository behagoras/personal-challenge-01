/* eslint-disable no-case-declarations */
// import actions from '../actions';

function reducer(state = [], action) {
  switch (action.type) {
    case 'FILTER':
      return { ...state,
        filtered: state.original.filter(
          (article) => `${article.name}${article.price}` // Filter by name and price
            .toUpperCase()
            .includes(action.filter.toUpperCase()),
        ).sort((a, b) => (a.name < b.name ? -1 : 1)).slice(), // Sort descending
      };
    case 'SET_STATE':
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
