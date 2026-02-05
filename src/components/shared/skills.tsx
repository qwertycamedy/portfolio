import { navLinks } from '@/utils';
import { Card } from '@/components/ui';
import { SectionTitle } from '@/components/shared';
import { Element } from 'react-scroll';
import { useAppSelector } from '@/hooks';
import { skillsSel } from '@/store/slices/skills';

export const Skills = () => {
  const { skills } = useAppSelector(skillsSel);
  return (
    <Element name={navLinks[3].path} id={navLinks[3].path}>
      <Card className={'h-150 flex-col gap-10'}>
        <SectionTitle text="Скиллы" />
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2">
          {skills.map((skill) => (
            <div className="bg-muted flex flex-col overflow-hidden rounded-xl">
              <div className="bg-primary px-2 py-1 text-center">
                <span>{skill.title}</span>
              </div>
              <div className="flex items-center justify-center py-8 px-4">
                <skill.icon size={60} />
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
