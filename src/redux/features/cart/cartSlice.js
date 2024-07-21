import { createSlice } from '@reduxjs/toolkit';
import { foodList } from '../../../assets/assets';

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
    if (quantity > 0) {
      const item = foodList.find((food) => food.id === itemId);
      total += item.price * quantity;
    }
  });

  return total;
};

export default cartSlice.reducer;
