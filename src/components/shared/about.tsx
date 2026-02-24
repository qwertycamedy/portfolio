import { navLinks } from '@/utils';
import { Card } from '@/components/ui';
import { SectionTitle } from '@/components/shared';
import { Element } from 'react-scroll';
import meImg from '@/assets/img/me.jpg';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <Element name={navLinks[3].path} id={navLinks[3].path}>
      <Card className={'flex flex-col gap-8'}>
        <SectionTitle text={t('about.title')} />
        <div className="flex flex-col-reverse gap-6.5 md:flex-row">
          <div
            className="text-justify text-sm"
            dangerouslySetInnerHTML={{ __html: t('about.text') }}
          />
          <img
            className="bg-primary mx-auto flex h-50 w-50 rounded-full md:mx-0"
            width={200}
            height={200}
            src={meImg}
            alt="Adil Kairbekov Qwertycamedy Frontend Developer"
          />
        </div>
      </Card>
    </Element>
  );
};
