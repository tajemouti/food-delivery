import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import foodReducer from './features/food/foodSlice';
import categoryReducer from './features/category/categorySlice';
import loginReducer from './features/login/loginSlice';
import loginStateReducer from './features/login/loginStateSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    food: foodReducer,
    category: categoryReducer,
    login: loginReducer,
    loginState: loginStateReducer,
  },
});

export default store;
