import { createSlice } from '@reduxjs/toolkit';
import { foodList } from '../../../assets/assets';

const initialState = foodList;

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
});

export default foodSlice.reducer;
