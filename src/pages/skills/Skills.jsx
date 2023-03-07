import React, { useContext } from "react";
import MyPage from "../../components/page/MyPage";
import MySection from "../../components/section/MySection";
import { AppContext } from "../../Context";
import cl from "./Skills.module.scss";
import qImg from "../../assets/img/quote.svg";

const Skills = () => {
  const { t, skills } = useContext(AppContext);
  return (
    <MyPage classNames={"page"}>
      <h1 className={cl.title + " title-main-pl title-main"}>{t("Skills")}</h1>
      <MySection>
        <div className={cl.cards}>
          {skills.map(skill => (
            <div className={cl.card} key={skill.id}>
              {skill.img}
              <h6 className={cl.cardTitle}>{skill.title}</h6>
              <div className={cl.info}>
                <img
                  className={cl.quote}
                  src={qImg}
                  loading="lazy"
                  width="36"
                  height="25"
                  alt="img"
                />
                <p className={cl.text}>{t(skill.text)}</p>
                <span className={cl.bottom}></span>
              </div>
            </div>
          ))}
        </div>
      </MySection>
    </MyPage>
  );
};

export default Skills;
