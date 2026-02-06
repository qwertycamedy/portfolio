import { useRef } from 'react';
import { Element } from 'react-scroll';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';

import { navLinks } from '@/utils';
import { Button, Card, Title, TitleSizes } from '@/components/ui';
import { SectionTitle, SliderNavigation } from '@/components/shared';

import { projectsSel } from '@/store';
import { useAppSelector } from '@/hooks';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Projects = () => {
  const { projects } = useAppSelector(projectsSel);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Element name={navLinks[1].path} id={navLinks[1].path}>
      <Card className="min-h-0 min-w-0 flex-col gap-10">
        <div className="flex items-center justify-between gap-10">
          <SectionTitle text="Портфолио" />
          <SliderNavigation
            onPrev={() => swiperRef?.current?.swiper.slidePrev()}
            onNext={() => swiperRef?.current?.swiper.slideNext()}
          />
        </div>

        <Swiper
          ref={swiperRef}
          className="mySwiper max-w-full min-w-0 cursor-grab active:cursor-grabbing"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
        >
          {projects.map((project, i) => (
            <SwiperSlide
              className="bg-primary max-w-ful group relative overflow-hidden rounded-3xl p-1"
              key={project.name + i}
            >
              <Link
                className="flex flex-1 flex-col gap-4.5 pb-8"
                to={`/projects/${project.name}`}
              >
                <img
                  className="h-37.5 w-full rounded-[22px] object-cover"
                  width={200}
                  height={130}
                  src={project.imageUrls[0]}
                  alt={`${project.name} Qwertycamedy Frontend`}
                />
                <div className="flex flex-col items-center justify-center">
                  <Title
                    text={project.name}
                    size={TitleSizes.h6}
                    className="text-center"
                  />
                  <div className="flex gap-1">
                    {project.categories.map((category, i) => (
                      <span>
                        {category} {++i < project.categories.length && '|'}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Button>
                    Дальше <ChevronRight />
                  </Button>
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </Element>
  );
};
