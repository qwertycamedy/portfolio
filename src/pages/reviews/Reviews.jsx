import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyPage from "../../components/page/MyPage";
import { AppContext } from "../../Context";
import MyBtn from "../../UI/btn/MyBtn";
import rImg from "../../assets/img/arrow-right.svg";
import cl from "./Reviews.module.scss";
import MySection from "../../components/section/MySection";

const Reviews = () => {
  const { t, reviews } = useContext(AppContext);
  return (
    <MyPage>
      <h1 className={`${cl.title} title-main`}>{t("Reviews")}</h1>
      <div className={cl.reviews}>
        {reviews.map(review => (
          <MySection classNames={cl.outer} key={review.id}>
            <div to={review.path} className={cl.review} target="_blank">
              <p className={cl.reviewText}>{t(review.text)}</p>
              <div
                className={cl.reviewFlex + " flex items-center justify-between"}
              >
                <div className={cl.reviewInfo}>
                  <h6 className={cl.reviewTitle}>{t(review.title)}</h6>
                  <p className={cl.reviewService}>{t(review.service)}</p>
                </div>
                <Link to={review.to} target='_blank'>
                  <MyBtn classNames={cl.reviewBtn}>
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
              </div>
            </div>
          </MySection>
        ))}
      </div>
    </MyPage>
  );
};

export default Reviews;
