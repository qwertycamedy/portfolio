import { configureStore } from "@reduxjs/toolkit";
import projects from "./slices/projects";

export const store = configureStore({
  reducer: {
    projects,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
