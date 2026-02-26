import { Element } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Info } from 'lucide-react';

import { projects } from '@/store';
import { navLinks, networkLinks } from '@/utils';
import {
  Button,
  Card,
  Title,
  TitleSizes,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui';
import { SectionTitle, SliderNavigation } from '@/components/shared';

import { useIsMobile, useSwiperNavigation } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

export const Projects = () => {
  const {
    swiperRef,
    handleSlideChange,
    handleSwiperInit,
    goNext,
    goPrev,
    isBeginning,
    isEnd,
  } = useSwiperNavigation();
  const { t } = useTranslation();
  const { isMobile, isTablet } = useIsMobile();
  const githubPath: string | undefined = networkLinks.find((link) =>
    link.path.includes('github.com'),
  )?.path;
  const tooltipBtnRef = useRef<HTMLButtonElement | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const onMobInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  const onMobInfoOutside = (e: MouseEvent) => {
    if (
      tooltipBtnRef.current &&
      !tooltipBtnRef.current.contains(e.target as Node)
    ) {
      setIsInfoOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', onMobInfoOutside);

    return () => {
      document.removeEventListener('mousedown', onMobInfoOutside);
    };
  });

  return (
    <Element name={navLinks[1].path} id={navLinks[1].path}>
      <Card className="min-h-0 min-w-0 flex-col gap-10">
        <div className="flex items-center justify-between gap-10">
          <div className="flex items-start gap-4">
            <SectionTitle text={t('projects.title')} />
            {!!githubPath &&
              (!isMobile && !isTablet ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="md:mt-1.75">
                      <Info />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-base">
                      {t('projects.more_projects')}{' '}
                      <Link
                        to={githubPath}
                        target={'_blank'}
                        className="text-primary"
                      >
                        Github
                      </Link>
                    </p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Tooltip open={isInfoOpen}>
                  <TooltipTrigger asChild>
                    <button
                      className="md:mt-1.75"
                      onClick={onMobInfo}
                      ref={tooltipBtnRef}
                    >
                      <Info />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-base">
                      {t('projects.more_projects')}{' '}
                      <Link
                        to={githubPath}
                        target={'_blank'}
                        className="text-primary"
                      >
                        Github
                      </Link>
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
          </div>
          <SliderNavigation
            onPrev={goPrev}
            onNext={goNext}
            isPrevDisabled={isBeginning}
            isNextDisabled={isEnd}
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
          onInit={handleSwiperInit}
          onSlideChange={handleSlideChange}
        >
          {projects.map((project) => (
            <SwiperSlide
              className="bg-primary max-w-ful group relative overflow-hidden rounded-3xl p-1"
              key={project.name}
            >
              <Link
                className="flex flex-1 flex-col gap-4.5 pb-8"
                to={`/projects/${project.path}`}
              >
                <img
                  className="h-37.5 w-full rounded-[22px] object-cover"
                  width={200}
                  height={130}
                  src={project.imageUrls[0]}
                  alt={`${project.name} Qwertycamedy Frontend`}
                />
                <div className="text-background dark:text-foreground flex flex-col items-center justify-center gap-1.5 md:gap-0">
                  <Title
                    text={t(project.name)}
                    size={TitleSizes.h5}
                    className="text-center"
                  />
                  <div className="flex gap-1 text-xs md:text-base">
                    {[...project.categories].slice(0, 3).map((category, i) => (
                      <span key={category}>
                        {category}{' '}
                        {++i < [...project.categories].slice(0, 4).length &&
                          '|'}
                      </span>
                    ))}
                    {project.categories.length > 3 && '...'}
                  </div>
                </div>
                <span className="absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Button>
                    {t('projects.more')} <ChevronRight />
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
