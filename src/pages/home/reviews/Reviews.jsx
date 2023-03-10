import React, { useContext } from "react";
import MySection from "../../../components/section/MySection";
import MyLink from "../../../UI/link/MyLink";
import lImg from "../../../assets/img/arrow-left.svg";
import rImg from "../../../assets/img/arrow-right.svg";
import { AppContext } from "../../../Context";
import MyBtnC from "../../../UI/btn-c/MyBtnC";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import cl from "./Reviews.module.scss";
import MyBtn from "../../../UI/btn/MyBtn";

const Reviews = ({ t }) => {
  const { reviews } = useContext(AppContext);

  const navPrev = React.useRef(null);
  const navNext = React.useRef(null);
  return (
    <MySection classNames={`${cl.section} min-w-0 relative`}>
      <div className="flex justify-between items-center min-w-0">
        <h3 className={cl.title + " title-section"}>{t("Reviews")}</h3>
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
          <MyLink to="reviews" text="More!" />
        </div>
      </div>

      <Swiper
        spaceBetween={25}
        slidesPerView={3}
        modules={[Navigation]}
        speed={500}
        grabCursor
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
        {reviews.map(
          review =>
            review.id <= 3 && (
              <SwiperSlide className={cl.slide} key={review.id}>
                {
                  <Link
                    to={review.to}
                    className={cl.slideContent}
                    target="_blank"
                  >
                    <div className={cl.slideInfo}>
                      <p className={cl.slideText}>{t(review.text)}</p>
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
                    </div>
                    <h6 className={cl.slideTitle}>{t(review.title)}</h6>
                    <p className={cl.slideService}>{t(review.service)}</p>
                  </Link>
                }
              </SwiperSlide>
            )
        )}
      </Swiper>
    </MySection>
  );
};

export default Reviews;
