import React, { useContext } from "react";
import MySection from "../../../components/section/MySection";
import MyBtnC from "../../../UI/btn-c/MyBtnC";
import MyLink from "../../../UI/link/MyLink";
import lImg from "../../../assets/img/arrow-left.svg";
import rImg from "../../../assets/img/arrow-right.svg";
import cl from "./Projects.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperCore, { Mousewheel } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import { Link } from "react-router-dom";
import { AppContext } from "../../../Context";
import MyBtn from "../../../UI/btn/MyBtn";

SwiperCore.use([Mousewheel]);

const Projects = ({ t }) => {
  const { projects } = useContext(AppContext);

  const navPrev = React.useRef(null);
  const navNext = React.useRef(null);
  return (
    <MySection classNames={`${cl.section} min-w-0 relative`}>
      <div className="flex justify-between items-center min-w-0">
        <h3 className={cl.title + " title-section"}>{t("Projects")}</h3>
        <div className={cl.sliderNav + " flex items-center gap-4 min-w-0"}>
          <MyBtnC
            classNames={cl.navBtn}
            w={20}
            h={20}
            img={lImg}
            ref={navPrev}
          />
          <MyBtnC
            classNames={cl.navBtn}
            w={20}
            h={20}
            img={rImg}
            ref={navNext}
          />
          <MyLink to="projects" text="More!" />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        speed={500}
        grabCursor
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true
        }}
        navigation={{
          prevEl: navPrev.current,
          nextEl: navNext.current,
        }}
        breakpoints={{
          320: {
            spaceBetween: 12,
            slidesPerView: 1
          },

          550: {
            spaceBetween: 12,
            slidesPerView: 2
          },

          1000: {
            spaceBetween: 25,
            slidesPerView: 3
          }
        }}
        onSwiper={swiper => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navPrev.current;
            swiper.params.navigation.nextEl = navNext.current;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className={cl.slider}
      >
        {projects.map(
          project =>
            project.id <= 5 && (
              <SwiperSlide className={cl.slide} key={project.id}>
                {
                  <Link to={`/project/${project.id - 1}`} className={cl.slideContent}>
                    <img
                      className={cl.slideCover}
                      src={project.cover}
                      loading="lazy"
                      width="221"
                      height="151"
                      alt="img"
                    />
                    <div className={cl.slideInfo}>
                      <h6 className={cl.slideTitle}>{t(project.title)}</h6>
                      <p className={cl.slideType}>
                        {project.type.map(type => (
                          <span key={type}>{t(type)}</span>
                        ))}
                      </p>
                      <p className={cl.slideSkills}>
                        {project.skills.map(skill => (
                          <span key={skill}>{t(skill)}</span>
                        ))}
                      </p>
                    </div>
                    <MyBtn classNames={cl.slideBtn}>
                      {t("Entire")}
                      <img
                        className="img"
                        src={rImg}
                        loading="lazy"
                        width="10"
                        height="20"
                        alt="img"
                      />
                    </MyBtn>
                  </Link>
                }
              </SwiperSlide>
            )
        )}
      </Swiper>
    </MySection>
  );
};

export default Projects;
