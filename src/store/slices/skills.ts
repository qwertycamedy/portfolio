import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { TSkill } from '@/types';
import {
  CssIco,
  HtmlIco,
  JsIco,
  NextIco,
  ReactIco,
  ReduxIco,
  ShadcnuiIco,
  TailwindIco,
  TsIco,
  ZustandIco,
} from '@/components/icons';

type TSkillsState = {
  skills: TSkill[];
};

const initialState: TSkillsState = {
  skills: [
    {
      title: 'HTML',
      description: `Скелет проекта, на котором все держится`,
      icon: HtmlIco,
    },
    {
      title: 'CSS',
      description: `Внешний вид проекта`,
      icon: CssIco,
    },
    {
      title: 'Javascript',
      description: `Вся сложная логика проекта`,
      icon: JsIco,
    },
    {
      title: 'Typescript',
      description: `Типизация js для лучшего понимания и взаимодействия`,
      icon: TsIco,
    },
    {
      title: 'React',
      description: `Огромная библиотека, как инструмент для быстрой и качественной разработки`,
      icon: ReactIco,
    },
    {
      title: 'Next.js',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: NextIco,
    },
    {
      title: 'Redux',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: ReduxIco,
    },
    {
      title: 'Zustand',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: ZustandIco,
    },
    {
      title: 'Tailwind',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: TailwindIco,
    },
    {
      title: 'Shadcnui',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: ShadcnuiIco,
    },
  ],
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { setSkills } = skillsSlice.actions;
export const skillsSel = (state: RootState) => state.skills;
export default skillsSlice.reducer;
