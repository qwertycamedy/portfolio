import { Link } from 'react-router-dom';
import { Button, Card, Title, TitleSizes } from '../ui';
import { navLinks, networkLinks } from '@/utils';

export const Hero = () => {
  return (
    <section className="flex w-full" id={navLinks[0].path}>
      <Card className="h-max flex-col">
        <p className="mb-2">Qwerty Camedy</p>
        <Title
          className={'mb-5'}
          text="Frontend Developer"
          size={TitleSizes.h1}
        />
        <Link to={networkLinks[1].path} target="blank">
          <Button className="w-max px-5 py-3">Нанять меня</Button>
        </Link>
      </Card>
    </section>
  );
};
