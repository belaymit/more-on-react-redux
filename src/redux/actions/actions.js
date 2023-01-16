const ADD = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

const REMOVE = (id) => ({
  type: 'REMOVE_CART',
  payload: id,
});

export { ADD, REMOVE };
