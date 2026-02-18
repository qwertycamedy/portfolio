import { configureStore } from '@reduxjs/toolkit';
import theme from './slices/theme';

export const store = configureStore({
  reducer: {
    theme,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
