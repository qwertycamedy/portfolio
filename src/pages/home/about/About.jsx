import React from "react";
import MySection from "../../../components/section/MySection";
import MyLink from "../../../UI/link/MyLink";
import MeImg from "../../../UI/meImg/MeImg";
import cl from "./About.module.scss";

const About = ({t}) => {
  return (
    <MySection>
      <h3 className={cl.title + " title-section"}>{t('About')}</h3>
      <div className={cl.flex + " flex justify-between items-center gap-8"}>
        <div className={cl.info + " flex flex-col gap-16"}>
          <p className={cl.text}>
            {t("about-mini-1")} <br />
            {t("about-mini-2")} <br />
            {t("about-mini-3")}
          </p>
          <MyLink to="about" text="More!" />
        </div>
        <MeImg w={175} h={175} classNames='reverse-img' />
      </div>
    </MySection>
  );
};

export default About;
