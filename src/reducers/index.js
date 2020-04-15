/* eslint-disable no-case-declarations */
// import actions from '../actions';
const arr = [1, 2, 3, 4],
  brr = [2, 4],
  res = arr.filter((f) => !brr.includes(f));
console.log('res', res);
function reducer(state = [], action) {
  switch (action.type) {
    case 'FILTER':
      return { ...state,
        filtered: state.original.filter((offer) => {
          return offer.filtrable.includes(...action.filter);
        }),
        // filtered: state.original.filter(
        //   (offer) => {
        //     return offer.filtrable.some(
        //       (filter) => {
        //         // console.log('filter', filter);
        //         // return filter.includes(action.filter);
        //         // filter.includes(action.filter);
        //         // return filter.every((i) => action.filter.includes(i));
        //         return action.filter.every((i) => {
        //           // console.log(i);
        //           return filter.includes(i);
        //         });
        //         // arr1.every(i => arr2.includes(i))
        //       },
        //     );
        //   },
        // ),
        // filtered: state.original.filter((filtrable) => action.filter.includes(filtrable)),

      };
    case 'SET_STATE':
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
