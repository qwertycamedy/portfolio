import { navLinks } from '@/utils';
import { Card } from '@/components/ui';
import { SectionTitle } from '@/components/shared';
import { Element } from 'react-scroll';
import { useAppSelector } from '@/hooks';
import { skillsSel } from '@/store/slices/skills';

export const Skills = () => {
  const { skills } = useAppSelector(skillsSel);
  return (
    <Element name={navLinks[2].path} id={navLinks[2].path}>
      <Card className={'flex-col gap-10'}>
        <SectionTitle text="Скиллы" />
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 xl:grid-cols-6">
          {skills.map((skill, i) => (
            <div
              className="bg-muted flex flex-col overflow-hidden rounded-xl"
              key={skill.title + i}
            >
              <div className="bg-primary truncate p-2 text-center text-xs ...">
                <span>{skill.title}</span>
              </div>
              <div className="flex items-center justify-center px-4 py-8">
                <skill.icon size={60} className={'text-primary/30'} />
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
