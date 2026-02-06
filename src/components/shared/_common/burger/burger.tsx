import { BurgerIco } from '@/components/icons';
import { Button } from '@/components/ui';

export const Burger = () => {
  return (
    <Button className="fixed right-5 bottom-25 z-1000 px-5!">
      <span>Меню</span>
      <BurgerIco size={24} />
    </Button>
  );
};
