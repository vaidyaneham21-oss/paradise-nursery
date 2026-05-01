const initialState = {
  items: []
};

export const addItem = (state, action) => {
  state.items.push(action.payload);
};

export const removeItem = (state, action) => {
  state.items = state.items.filter((item, index) => index !== action.payload);
};

export const updateQuantity = (state, action) => {
  const { index, quantity } = action.payload;
  if (state.items[index]) {
    state.items[index].quantity = quantity;
  }
};

export default initialState;
