import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { ETheme } from '@/types';

const THEME_KEY = 'qc_theme';

const getSystemTheme = (): ETheme => {
  if (typeof window === 'undefined') return ETheme.dark;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ETheme.dark
    : ETheme.light;
};

const getInitialTheme = (): ETheme => {
  const stored = localStorage.getItem(THEME_KEY) as ETheme | null;
  return stored ?? getSystemTheme();
};

type EThemeState = {
  theme: ETheme;
};

const initialState: EThemeState = {
  theme: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ETheme>) {
      state.theme = action.payload;
      localStorage.setItem(THEME_KEY, action.payload);
    },
    toggleTheme(state) {
      state.theme = state.theme === ETheme.light ? ETheme.dark : ETheme.light;
      localStorage.setItem(THEME_KEY, state.theme);
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export const themeSel = (state: RootState) => state.theme;
export default themeSlice.reducer;
