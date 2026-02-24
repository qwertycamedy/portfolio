import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { navLinks, networkLinks } from '@/utils';
import { useIsMobile } from '@/hooks';
import { NetworkLinks } from '@/components/shared';
import { Button, Card, Title, TitleSizes } from '@/components/ui';

export const Hero = () => {
  const { isMobile, isTablet } = useIsMobile();
  const { t } = useTranslation();

  return (
    <Element name={navLinks[0].path} id={navLinks[0].path}>
      <Card className="h-max flex-col">
        <p className="text-secondary-foreground mb-1 text-xs md:text-sm lg:mb-2 lg:text-base">
          {t('hero.suptitle')}
        </p>
        <Title
          className={'mb-3.5 lg:mb-5'}
          text={t('hero.title')}
          size={TitleSizes.h1}
        />
        {isMobile || isTablet ? (
          <NetworkLinks />
        ) : (
          <Link to={networkLinks[0].path} target="blank">
            <Button className="w-max px-5 py-3">{t('hero.button')}</Button>
          </Link>
        )}
      </Card>
    </Element>
  );
};
