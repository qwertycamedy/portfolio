import { Button, Card, Title, TitleSizes } from '../ui';

export const Hero = () => {
  return (
    <section id="hero">
      <Card>
        <p>Qwerty Camedy</p>
        <Title text="Frontend Developer" size={TitleSizes.h1} />
        <Button>Нанять меня</Button>
      </Card>
    </section>
  );
};
