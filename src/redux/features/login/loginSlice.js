import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    showLogin: () => true,
    hideLogin: () => false,
  },
});

export const { showLogin, hideLogin } = loginSlice.actions;

export default loginSlice.reducer;
