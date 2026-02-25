import { themeSel, toggleTheme } from '@/store';
import { ELocales, ETheme } from '@/types';
import { useAppDispatch, useAppSelector, useLocales } from '@/hooks';
import { Moon, Settings, Sun } from 'lucide-react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Switch,
} from '@/components/ui';

export const Switchers = ({ isDropdown }: { isDropdown: boolean }) => {
  return isDropdown ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={'icon-lg'}
          className="bg-foreground text-primary hover:bg-foreground active:bg-foreground absolute top-5 right-5 z-1001 transition-opacity hover:opacity-70 active:opacity-70"
        >
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" className="min-w-max p-4">
        <SwitchersContent />
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <SwitchersContent />
  );
};

const SwitchersContent = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(themeSel);
  const { selectedLanguage, onLangChange } = useLocales();

  return (
    <div className="flex flex-col gap-6 lg:mt-3 lg:flex-row">
      <Switch
        isOn={selectedLanguage === ELocales.ru}
        onChange={onLangChange}
        content={<>{selectedLanguage}</>}
      />

      <Switch
        isOn={theme === ETheme.dark}
        onChange={() => dispatch(toggleTheme())}
        content={
          <>{theme === ETheme.dark ? <Sun size={18} /> : <Moon size={18} />}</>
        }
      />
    </div>
  );
};
