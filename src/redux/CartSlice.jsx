const initialState = {
  items: []
};

export const addItem = (item) => {
  initialState.items.push(item);
};

export const removeItem = (index) => {
  initialState.items.splice(index, 1);
};

export const updateQuantity = (index, quantity) => {
  initialState.items[index].quantity = quantity;
};

export default initialState;
