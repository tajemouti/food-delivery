import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Login';

const loginStateSlice = createSlice({
  name: 'loginState',
  initialState,
  reducers: {
    setLogin: () => 'Login',
    setSignUp: () => 'Sign UP',
  },
});

export const { setLogin, setSignUp } = loginStateSlice.actions;

export default loginStateSlice.reducer;
