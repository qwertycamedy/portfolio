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
        <div className="flex flex-col-reverse gap-6.5 md:flex-row">
          <p className="text-justify text-sm">
            Привет, я Адиль — фронтенд-разработчик с 5 годами опыта. <br />
            Я разрабатываю и поддерживаю проекты на React / Next.js, полностью
            закрывая клиентскую часть веб-приложений. <br />
            <br />
            За это время я работал в стартапах, устоявшихся компаниях и на
            фрилансе, поэтому хорошо понимаю разные процессы, требования и темпы
            разработки.
            <br />
            В проектах брал на себя ответственность фронтенд-тимлида:
            участвовал в архитектурных решениях, код-ревью и организации работы
            команды. <br />
            <br />
            Верстка, сложная логика, работа с API, оптимизация и UX — уверенно
            чувствую себя на каждом уровне фронтенда и умею доводить интерфейсы
            до продакшн-качества. <br />
            <br />
            Буду рад ответить на ваши вопросы и открыт к дальнейшему
            сотрудничеству!
          </p>
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
