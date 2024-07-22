import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  foodList: [],
  status: 'idle',
  error: null,
};

export const fetchFoodByCategory = createAsyncThunk(
  'food/fetchFoodByCategory',
  async (category) => {
    if (category === 'All') {
      const categoriesResponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const categoriesData = await categoriesResponse.json();
      const categoryNames = categoriesData.categories.map((cat) => cat.strCategory);

      const mealPromises = categoryNames.map(async (cat) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
        const data = await response.json();
        return data.meals.map((meal) => ({
          ...meal,
          category: cat,
          price: (Math.random() * 20 + 10).toFixed(2),
        }));
      });

      const allMeals = (await Promise.all(mealPromises)).flat();
      return allMeals;
    }
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();

    const mealsWithPrices = data.meals.map((meal) => ({
      ...meal,
      category,
      price: (Math.random() * 20 + 10).toFixed(2),
    }));
    return mealsWithPrices;
  },
);

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFoodByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.foodList = action.payload;
      })
      .addCase(fetchFoodByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default foodSlice.reducer;
