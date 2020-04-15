/* eslint-disable no-case-declarations */
// import actions from '../actions';

function reducer(state = [], action) {
  switch (action.type) {
    case 'FILTER':
      return { ...state,
        filtered: state.original.filter(
          (offer) => {
            return offer.filtrable.some(
              (filter) => {
                return filter.includes(action.filter);
              },
            );
          },
        ),

        // filtered: state.original.filter(
        //   (offer) => `${offer.position}${offer.role}${offer.level}${JSON.stringify(offer.languages)}${JSON.stringify(offer.tools)}` // Filter by name and price
        //     .toUpperCase()
        //     .includes(action.filter.toUpperCase()),
        // ),

      };
    case 'SET_STATE':
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
