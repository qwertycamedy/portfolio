import { SliderNavigation } from '@/components/shared';
import {
  Button,
  Card,
  Page,
  Skeleton,
  Title,
  TitleSizes,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui';
import { useSwiperNavigation } from '@/hooks';
import { projects } from '@/store';
import { TProject } from '@/types';
import { AppWindowMac, ChevronLeft, Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Project = () => {
  const { project_name } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<TProject | null | undefined>(null);
  const { swiperRef, handleSlideChange, handleSwiperInit, isBeginning, isEnd } =
    useSwiperNavigation();

  useEffect(() => {
    const curProject = projects.find(
      (project) => project.name === project_name,
    );

    setTimeout(() => {
      if (curProject) {
        setProject(curProject);
      } else {
        navigate('*');
      }
    }, 750);
  }, [projects]);

  const clickOnImg = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.currentTarget;

    if (!document.fullscreenElement) {
      target.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <Page className={'relative z-1'} contentCl={'flex-col'} sidebar={false}>
      <Card className="relative items-center justify-between gap-8 py-4 pr-8 pl-4 md:p-4">
        <Link to={'/'}>
          <Button className="pr-6!">
            <ChevronLeft /> Go Back
          </Button>
        </Link>
        {project_name && (
          <Title
            className={'md:absolute md:left-1/2 md:-translate-x-1/2'}
            text={project_name}
            size={TitleSizes.h3}
          />
        )}
      </Card>
      <div className="flex flex-col gap-5 xl:grid xl:grid-cols-8">
        {project ? (
          <Card className="col-start-1 col-end-6 min-h-0 min-w-0 flex-col items-center justify-center gap-2 p-4">
            <Swiper
              ref={swiperRef}
              className="mySwiper w-full max-w-full min-w-0 cursor-grab active:cursor-grabbing"
              slidesPerView={1}
              onInit={handleSwiperInit}
              onSlideChange={handleSlideChange}
            >
              {project?.imageUrls.map((imageUrl) => (
                <SwiperSlide key={imageUrl}>
                  <div className="flex h-full items-center justify-center rounded-2xl">
                    <img
                      className="max-h-[50svh] w-full rounded-2xl object-contain"
                      src={imageUrl}
                      alt={`${project.name} project | Qwertycamedy Frontend Developer`}
                      width={300}
                      height={150}
                      onClick={clickOnImg}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {project.imageUrls.length > 1 && (
              <SliderNavigation
                onPrev={() => swiperRef?.current?.swiper.slidePrev()}
                onNext={() => swiperRef?.current?.swiper.slideNext()}
                isPrevDisabled={isBeginning}
                isNextDisabled={isEnd}
              />
            )}
          </Card>
        ) : (
          <Skeleton className="col-start-1 col-end-6 h-140" />
        )}
        {project ? (
          <Card className={'col-start-6 col-end-9 flex-col gap-6 px-4 py-6'}>
            <div className="flex flex-col gap-2">
              <Title text="Стэк примененных технологий:" size={TitleSizes.h5} />
              <ul className="text-secondary-foreground flex flex-wrap gap-1.5 text-xs md:text-sm">
                {project.categories.map((category, i) => (
                  <li key={category}>
                    {category} {project.categories.length > ++i && '|'}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <Title text="Описание:" size={TitleSizes.h5} />
              <span className="text-secondary-foreground text-justify text-xs md:text-sm">
                {project.description}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Title text="Ссылки:" size={TitleSizes.h5} />
              <div className="flex gap-2">
                {project.githubUrl && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to={project.githubUrl} target="_blank">
                        <Button size={'icon'}>
                          <Github />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {project.siteUrl && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to={project.siteUrl} target="_blank">
                        <Button size={'icon'}>
                          <AppWindowMac />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ссылка на проект</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>
          </Card>
        ) : (
          <Skeleton className="col-start-6 col-end-9 h-140" />
        )}
      </div>
    </Page>
  );
};
