import { configureStore } from '@reduxjs/toolkit';
import projects from './slices/projects';
import skills from './slices/skills';
import reviews from './slices/reviews';

export const store = configureStore({
  reducer: {
    projects,
    skills,
    reviews
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
