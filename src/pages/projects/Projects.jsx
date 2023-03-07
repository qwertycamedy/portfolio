import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyPage from "../../components/page/MyPage";
import { AppContext } from "../../Context";
import MyBtn from "../../UI/btn/MyBtn";
import cl from "./Projects.module.scss";
import rImg from "../../assets/img/arrow-right.svg";
import MySection from "../../components/section/MySection";

const Projects = () => {
  const { t, projects } = useContext(AppContext);
  return (
    <MyPage classNames={"page"}>
      <h1 className={`${cl.title} title-main`}>{t("Projects")}</h1>
      <div className={cl.projects}>
        {projects.map(project => (
          <MySection classNames={cl.outer} key={project.id}>
            <Link to={project.to} className={cl.project}>
              <img
                className={cl.projectCover}
                src={project.cover}
                loading="lazy"
                width="221"
                height="151"
                alt="img"
              />
              <div className={cl.projectInfo}>
                <h6 className={cl.projectTitle}>{t(project.title)}</h6>
                <p className={cl.projectType}>
                  {project.type.map(type => (
                    <span key={type}>{t(type)}</span>
                  ))}
                </p>
                <p className={cl.projectSkills}>
                  {project.skills.map(skill => (
                    <span key={skill}>{t(skill)}</span>
                  ))}
                </p>
              </div>
              <MyBtn classNames={cl.projectBtn}>
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
          </MySection>
        ))}
      </div>
    </MyPage>
  );
};

export default Projects;
