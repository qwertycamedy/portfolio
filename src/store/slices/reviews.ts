import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

type TReviewsState = {
  example: string;
};

const initialState: TReviewsState = {
  example: '',
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setExample: (state, { payload }) => {
      state.example = payload;
    },
  },
});

export const { setExample } = reviewsSlice.actions;
export const reviewsSel = (state: RootState) => state.reviews;
export default reviewsSlice.reducer;
