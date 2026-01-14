import { Button, Title, TitleSizes, } from '@/components/ui';

export const Home = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 pb-50 text-center">
        <Title text='Home' size={TitleSizes.h1} />
        <Button>Hello</Button>
    </div>
  );
};
