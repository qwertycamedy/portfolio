import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { TSkill } from '@/types';
import {
  CssIco,
  FigmaIco,
  HtmlIco,
  JsIco,
  MaterialuiIco,
  NextIco,
  ReactIco,
  ReduxIco,
  RestapiIco,
  ShadcnuiIco,
  TailwindIco,
  TsIco,
  ZustandIco,
  SassIco,
  GithubIco,
  TestjsIco,
  ManagementIco,
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
      title: 'Rest API',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: RestapiIco,
    },
    {
      title: 'Github',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: GithubIco,
    },
    {
      title: 'Тестирование',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: TestjsIco,
    },
    {
      title: 'Проект-Менеджмент',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: ManagementIco,
    },
    {
      title: 'Sass | Scss',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: SassIco,
    },
    {
      title: 'Shadcnui',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: ShadcnuiIco,
    },
    {
      title: 'MaterialUI',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: MaterialuiIco,
    },
    {
      title: 'Figma',
      description: `Фреймворк с React внутри, дающий четкие правила разработки`,
      icon: FigmaIco,
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
