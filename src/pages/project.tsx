import { QcIcoOutline, SliderNavigation } from '@/components/shared';
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
import { useAppSelector } from '@/hooks';
import { projectsSel } from '@/store';
import { TProject } from '@/types';
import { AppWindowMac, ChevronLeft, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

export const Project = () => {
  const { project_name } = useParams();
  const swiperRef = useRef<SwiperRef>(null);
  const { projects } = useAppSelector(projectsSel);
  const [project, setProject] = useState<TProject | null | undefined>(null);

  useEffect(() => {
    const curProject = projects.find(
      (project) => project.name === project_name,
    );

    setProject(curProject);
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
    <Page className={'relative z-1'} sidebar={false}>
      <Card className="relative items-center justify-between gap-8 p-4">
        <Link to={'/'}>
          <Button className="pr-6!">
            <ChevronLeft /> Go Back
          </Button>
        </Link>
        {project_name && (
          <Title
            className={'absolute left-1/2 -translate-x-1/2'}
            text={project_name}
            size={TitleSizes.h3}
          />
        )}
      </Card>
      <div className="grid grid-cols-8 gap-5">
        {project ? (
          <Card className="col-start-1 col-end-6 min-h-0 min-w-0 flex-col items-center justify-center gap-2 p-4">
            <Swiper
              ref={swiperRef}
              className="mySwiper w-full max-w-full min-w-0 cursor-grab active:cursor-grabbing"
              slidesPerView={1}
            >
              {project?.imageUrls.map((imageUrl) => (
                <SwiperSlide key={imageUrl}>
                  <div className="flex h-full items-center justify-center">
                    <img
                      className="w-full rounded-2xl"
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
              <ul className="text-secondary-foreground flex flex-wrap gap-1.5 text-sm">
                {project.categories.map((category, i) => (
                  <li>
                    {category} {project.categories.length > ++i && '|'}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <Title text="Описание:" size={TitleSizes.h5} />
              <span className="text-secondary-foreground text-justify text-sm">
                {project.description}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Title text="Ссылки:" size={TitleSizes.h5} />
              <div className="flex gap-2">
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
              </div>
            </div>
          </Card>
        ) : (
          <Skeleton className="col-start-6 col-end-9 h-140" />
        )}
      </div>
      <QcIcoOutline />
    </Page>
  );
};
