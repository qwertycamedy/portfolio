import { navLinks } from '@/utils';
import { Card } from '@/components/ui';
import { SectionTitle } from '@/components/shared';
import { Element } from 'react-scroll';
import meImg from '@/assets/img/me.jpg';

export const About = () => {
  return (
    <Element name={navLinks[3].path} id={navLinks[3].path}>
      <Card className={'flex flex-col gap-8'}>
        <SectionTitle text="Обо мне" />
        <div className="flex flex-col-reverse md:flex-row gap-6.5">
          <p className="text-sm text-justify">
            Всем привет, меня зовут Адиль! <br />
            <br /> Я обычный парень из “глубинки”, который мечтает просто жить и
            не волноваться по проблемам из ряда “ой, зарплата не скоро, надо
            затянуть ремни..”. Собственно, поэтому я топлю в программисты и
            делаю Вам эти замечательные сайты : ) <br />
            <br />
            Опыта у меня год с хвостиком, но важно лишь то, что я готов решать
            проблемы и заряжен для того, чтобы выдать Вам в руки охрененный
            сайтец!
          </p>
          <img
            className="bg-primary flex h-50 w-50 rounded-full mx-auto md:mx-0"
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
