import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../Context";
import MyPage from "../../components/page/MyPage";
import cl from "./Project.module.scss";
import MySection from "../../components/section/MySection";
import lImg from "../../assets/img/arrow-left.svg";
import rImg from "../../assets/img/arrow-right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Mousewheel } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import MyBtnC from "../../UI/btn-c/MyBtnC";
import MyLink from "../../UI/link/MyLink";
SwiperCore.use([Mousewheel]);

const Project = () => {
  const { t, projects } = useContext(AppContext);
  const { id } = useParams();
  const project = projects[id];

  const navPrev = React.useRef(null);
  const navNext = React.useRef(null);


  const navigate = useNavigate();

  return (
    <MyPage classNames={"page"}>
      <div className={cl.flex + " flex gap-6 items-center"}>
        <MyBtnC onClick={() => navigate(-1)} img={lImg} w='24' h='24' classNames={cl.back + ' p-4'} />
      <h1 className={`${cl.title} title-main`}>{t(project.title)}</h1>
      </div>
      <MySection>
        <div className={"relative"}>
          <Swiper
            spaceBetween={25}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            speed={500}
            grabCursor
            mousewheel={{
              releaseOnEdges: true,
              forceToAxis: true,
            }}
            pagination={{
              clickable: true
            }}
            navigation={{
              prevEl: navPrev.current,
              nextEl: navNext.current,
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
            className={cl.slider + " min-w-0"}
          >
            {project.imgs.map((img, index) => (
              <SwiperSlide key={index} className={cl.slide}>
                <img
                  className={cl.projectImg}
                  src={img}
                  loading="lazy"
                  width="221"
                  height="151"
                  alt="img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
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
          </div>
        </div>
        <div className="flex items-center justify-between">
        <div className={cl.projectInfo}>
          <div className="flex gap-2">
            <p className={cl.projectTypeTitle}>{t("Type")}:</p>
            <p className={cl.projectType}>
              {project.type.map(type => (
                <span key={type}>{t(type)}</span>
              ))}
            </p>
          </div>
          <div className="flex gap-2">
            <p className={cl.projectSkillsTitle}>{t("Skills")}:</p>
            <p className={cl.projectSkills}>
              {project.skills.map(skill => (
                <span key={skill}>{t(skill)}</span>
              ))}
            </p>
          </div>
        </div>
        <MyLink classNames={cl.projectBtn} text='To site' to={project.to} target='_blank' />
        </div>
      </MySection>
    </MyPage>
  );
};

export default Project;
