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
    case 'REMOVE_CART':
      // eslint-disable-next-line no-case-declarations
      const data = state.carts.filter((element) => element.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    default:
      return state;
  }
};

export default reducerFunctions;
