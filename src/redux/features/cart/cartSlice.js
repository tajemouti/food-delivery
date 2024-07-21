import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (!state[itemId]) {
        state[itemId] = 1;
      } else {
        state[itemId] += 1;
      }
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      if (state[itemId]) {
        if (state[itemId] === 1) {
          delete state[itemId];
        } else {
          state[itemId] -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const getTotalCartAmount = (state) => {
  let total = 0;

  Object.entries(state.cart).forEach(([itemId, quantity]) => {
    const item = state.food.foodList.find((food) => food.idMeal === itemId);
    if (item) {
      total += item.price * quantity;
    }
  });

  return total;
};

export default cartSlice.reducer;
