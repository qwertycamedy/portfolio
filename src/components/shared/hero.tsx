import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Button, Card, Title, TitleSizes } from '../ui';
import { navLinks, networkLinks } from '@/utils';
import { useIsMobile } from '@/hooks';
import { NetworkLinks } from './_common/network_links';

export const Hero = () => {
  const { isMobile, isTablet } = useIsMobile();

  return (
    <Element name={navLinks[0].path} id={navLinks[0].path}>
      <Card className="h-max flex-col">
        <p className="text-secondary-foreground mb-1 lg:mb-2 text-xs md:text-sm lg:text-base">Qwerty Camedy</p>
        <Title
          className={'mb-3.5 lg:mb-5'}
          text="Frontend Developer"
          size={TitleSizes.h1}
        />
        {isMobile || isTablet ? (
          <NetworkLinks />
        ) : (
          <Link to={networkLinks[0].path} target="blank">
            <Button className="w-max px-5 py-3">Нанять меня</Button>
          </Link>
        )}
      </Card>
    </Element>
  );
};
