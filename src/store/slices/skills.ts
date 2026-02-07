import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

type TSkillsState = {
  example: string;
};

const initialState: TSkillsState = {
  example: '',
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setExample: (state, { payload }) => {
      state.example = payload;
    },
  },
});

export const { setExample } = skillsSlice.actions;
export const skillsSel = (state: RootState) => state.skills;
export default skillsSlice.reducer;
