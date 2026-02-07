import { useAppDispatch, useAppSelector } from '@/hooks';
import { themeSel, toggleTheme } from '@/store';
import { ETheme } from '@/types';
import { Button } from '@/components/ui';
import { Moon, Sun } from 'lucide-react';

export const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(themeSel);

  return (
    <Button onClick={() => dispatch(toggleTheme())} size={'icon-lg'} className='bg-foreground text-primary fixed bottom-9 lg:bottom-14 right-5 lg:right-[unset] hover:bg-foreground hover:opacity-70 active:bg-foreground active:opacity-70 transition-opacity z-1001'>
      {theme === ETheme.dark ? <Moon /> : <Sun />}
    </Button>
  );
};
