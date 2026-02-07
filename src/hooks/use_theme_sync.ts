import { useEffect } from 'react';
import { useAppSelector } from './store';
import { themeSel } from '@/store';
import { ETheme } from '@/types';

export const useThemeSync = () => {
  const {theme} = useAppSelector(themeSel);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === ETheme.dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
};
