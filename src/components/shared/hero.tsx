import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Button, Card, Title, TitleSizes } from '../ui';
import { navLinks, networkLinks } from '@/utils';

export const Hero = () => {
  return (
    <Element name={navLinks[0].path} id={navLinks[0].path}>
      <Card className="h-max flex-col">
        <p className="mb-2 text-secondary-foreground">Qwerty Camedy</p>
        <Title
          className={'mb-5'}
          text="Frontend Developer"
          size={TitleSizes.h1}
        />
        <Link to={networkLinks[1].path} target="blank">
          <Button className="w-max px-5 py-3">Нанять меня</Button>
        </Link>
      </Card>
    </Element>
  );
};
