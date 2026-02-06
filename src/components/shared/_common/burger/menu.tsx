import { Button } from '@/components/ui';
import { Hamburger } from 'lucide-react';

export const BurgerMenu = () => {
  return (
    <Button>
      <span>Меню</span>
      <Hamburger />
    </Button>
  );
};
