import React, { useContext } from "react";
import MySection from "../../../components/section/MySection";
import { AppContext } from "../../../Context";
import qImg from "../../../assets/img/quote.svg";
import cl from "./Skills.module.scss";
import MyLink from "../../../UI/link/MyLink";

const Skills = ({ t }) => {
  const { skills } = useContext(AppContext);
  return (
    <MySection>
      <div className="flex justify-between items-center min-w-0">
        <h3 className={cl.title + " title-section"}>{t("Skills")}</h3>
        <MyLink to="skills" text="More!" />
      </div>
      <div className={cl.cards}>
        {skills.map(
          skill =>
            skill.id <= 4 && (
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
            )
        )}
      </div>
    </MySection>
  );
};

export default Skills;
