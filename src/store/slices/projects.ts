import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";
import { TProject } from "@/types";

type TProjectsState = {
  projects: TProject[];
  project: TProject | null | undefined;
};

const initialState: TProjectsState = {
  projects: [],
  project: null,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, { payload }: { payload: TProject[] }) => {
      state.projects = payload;
    },
    setProject: (state, { payload }: { payload: TProject | null }) => {
      state.project = payload;
    },
  },
});

export const { setProjects, setProject } = projectsSlice.actions;
export const projectsSel = (state: RootState) => state.projects;
export default projectsSlice.reducer;
