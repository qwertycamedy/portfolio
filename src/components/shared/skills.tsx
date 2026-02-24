import { navLinks, skills } from '@/utils';
import { Card } from '@/components/ui';
import { SectionTitle } from '@/components/shared';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <Element name={navLinks[2].path} id={navLinks[2].path}>
      <Card className={'flex-col gap-10'}>
        <SectionTitle text={t('skills.title')} />
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 xl:grid-cols-6">
          {skills.map((skill) => (
            <div
              className="bg-muted text-background dark:text-foreground flex flex-col overflow-hidden rounded-xl"
              key={skill.title}
            >
              <div className="bg-primary truncate p-2 text-center text-xs ...">
                <span>{t(skill.title)}</span>
              </div>
              <div className="flex items-center justify-center px-4 py-8">
                <skill.icon
                  size={60}
                  className={'text-primary/50 dark:text-primary/30'}
                />
              </div>
              {/* <div>
                <p>{skill.description}</p>
              </div> */}
            </div>
          ))}
        </div>
      </Card>
    </Element>
  );
};
