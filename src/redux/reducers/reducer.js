const initialState = {
  carts: [],
};
const reducerFunctions = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    default:
      return state;
  }
};

export default reducerFunctions;
