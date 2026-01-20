import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { EProjectCategories, TProject } from '@/types';

import project_1_img_0 from '@/assets/img/project_1_0.webp';
import project_1_img_1 from '@/assets/img/project_1_1.webp';
import project_1_img_2 from '@/assets/img/project_1_2.webp';

type TProjectsState = {
  projects: TProject[];
  project: TProject | null | undefined;
};

const initialState: TProjectsState = {
  projects: [
    {
      imageUrls: [project_1_img_0, project_1_img_1, project_1_img_2],
      name: 'AURA TMA',
      description: 'To integrate with TON, the standard wallet connection protocol is used — TON Connect. It is similar to WalletConnect on Ethereum, but made specifically for TON and covers basic integration aspects. For deeper integrations, it’s common to utilize various supplementary SDKs and APIs. To integrate with TON, the standard wallet connection protocol is used — TON Connect. It is similar to WalletConnect on Ethereum, but made specifically for TON and covers basic integration aspects. For deeper integrations, it’s common to utilize various supplementary SDKs and APIs.',
      categories: [EProjectCategories.react, EProjectCategories.tma],
    },
    {
      imageUrls: [project_1_img_0, project_1_img_1, project_1_img_2],
      name: 'AURA TMA',
      description: '',
      categories: [EProjectCategories.react, EProjectCategories.tma],
    },
    {
      imageUrls: [project_1_img_0, project_1_img_1, project_1_img_2],
      name: 'AURA TMA',
      description: '',
      categories: [EProjectCategories.react, EProjectCategories.tma],
    },
    {
      imageUrls: [project_1_img_0, project_1_img_1, project_1_img_2],
      name: 'AURA TMA',
      description: '',
      categories: [EProjectCategories.react, EProjectCategories.tma],
    },
    {
      imageUrls: [project_1_img_0, project_1_img_1, project_1_img_2],
      name: 'AURA TMA',
      description: '',
      categories: [EProjectCategories.react, EProjectCategories.tma],
    },
  ],
  project: null,
};

export const projectsSlice = createSlice({
  name: 'projects',
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
