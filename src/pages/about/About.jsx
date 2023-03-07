import React, { useContext } from "react";
import MyPage from "../../components/page/MyPage";
import MySection from "../../components/section/MySection";
import { AppContext } from "../../Context";
import MeImg from "../../UI/meImg/MeImg";
import cl from "./About.module.scss";

const About = () => {
  const { t } = useContext(AppContext);
  return (
    <MyPage classNames={"page"}>
      <h1 className={cl.title + " title-main-pl title-main"}>{t("About")}</h1>
      <MySection>
        <div className={cl.flex + " flex flex-col justify-between gap-8"}>
          <p className={cl.text}>
            <MeImg classNames={"float-right reverse-img"} w={300} h={300} />
            {t("about-1")} <br />
            <br />
            {t("about-2")} <br />
            <br />
            {t("about-3")} <br />
            <br />
            {t("about-4")} <br />
            <br />
            {t("about-5")}
          </p>
        </div>
      </MySection>
    </MyPage>
  );
};

export default About;
