import { React, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppContext } from "./Context";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Project from "./pages/project/Project";
import Reviews from "./pages/reviews/Reviews";
import Skills from "./pages/skills/Skills";
import Contacts from "./pages/contacts/Contacts";
import "./styles/App.scss";
import "./styles/_media.scss";
import snsqCover from "./assets/img/sneakers-square.webp";
import todoCover from "./assets/img/toodoo.webp";
import trifyCover from "./assets/img/trify.webp";
import wotCover from "./assets/img/wotCover.png";
import scanCover from "./assets/img/scantgCover.png";
import scan1 from "./assets/img/scan1.png";
import scan2 from "./assets/img/scan2.png";
import scan3 from "./assets/img/scan3.png";
import scan4 from "./assets/img/scan4.png";
import todo1 from "./assets/img/todo1.png";
import wot1 from "./assets/img/wot1.png";
import wot2 from "./assets/img/wot2.png";
import wot3 from "./assets/img/wot3.png";
import wot4 from "./assets/img/wot4.png";
import trify1 from "./assets/img/trify1.png";
import trify4 from "./assets/img/trify4.png";
import trify5 from "./assets/img/trify5.png";
import trify6 from "./assets/img/trify6.png";
import trify7 from "./assets/img/trify7.png";
import trify8 from "./assets/img/trify8.png";
import trify9 from "./assets/img/trify9.png";
import sn4 from "./assets/img/sn4.png";
import sn1 from "./assets/img/sn1.png";
import sn2 from "./assets/img/sn2.png";
import sn3 from "./assets/img/sn3.png";
import dashka1 from "./assets/img/dashka1.png";
import dashka2 from "./assets/img/dashka2.png";
import dashka3 from "./assets/img/dashka3.png";
import dashka4 from "./assets/img/dashka4.png";
import dashka5 from "./assets/img/dashka5.png";

import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiPhotoshop,
  DiSass,
} from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import {
  SiPug,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import soc1 from "./assets/img/tg.svg";
import soc2 from "./assets/img/em.svg";
import soc3 from "./assets/img/uw.svg";
import soc4 from "./assets/img/wl.svg";

function App() {
  //store
  const [projects] = useState([
    {
      id: 1,
      to: "https://qwertycamedy.ru/sites/TooDoo/",
      github: "https://github.com/qwertycamedy/toodoo",
      title: "TooDoo",
      type: ["Todo app", "SPA"],
      skills: ["React"],
      cover: todoCover,
      imgs: [todoCover, todo1],
    },
    {
      id: 2,
      to: "https://qwertycamedy.ru/sites/tank/",
      github: "https://github.com/qwertycamedy/tank",
      title: "WOT Accs",
      type: ["E-Commerce", "Multipage"],
      skills: ["HTML", "CSS", "JS"],
      cover: wotCover,
      imgs: [wotCover, wot1, wot2, wot3, wot4],
    },
    {
      id: 3,
      to: "https://qwertycamedy.ru/sites/trify/",
      github: "https://github.com/qwertycamedy/trify",
      title: "Trify",
      type: ["E-Commerce", "Multipage"],
      skills: ["HTML", "CSS", "JS"],
      cover: trifyCover,
      imgs: [
        trifyCover,
        trify9,
        trify1,
        trify4,
        trify5,
        trify6,
        trify7,
        trify8,
      ],
    },
    {
      id: 4,
      to: "https://qwertycamedy.ru/sites/scan-tg/",
      github: "https://github.com/qwertycamedy/scan-tg",
      title: "Scan TG",
      type: ["Landing-Page", "animations"],
      skills: ["HTML", "CSS", "JS"],
      cover: scanCover,
      imgs: [scanCover, scan1, scan2, scan3, scan4],
    },
    {
      id: 5,
      to: "https://sneakers-square.qwertycamedy.ru/",
      github: "https://github.com/qwertycamedy/sneakersSquare",
      title: "Sneakers Square",
      type: ["E-Commerce", "SPA"],
      skills: ["React"],
      cover: snsqCover,
      imgs: [snsqCover, sn4, sn1, sn2, sn3],
    },
    {
      id: 6,
      to: "https://dashka.vercel.app/",
      github: "https://github.com/qwertycamedy/dashka",
      title: "Dashka (Dashboard)",
      type: ["Dashboard", "SPA"],
      skills: ["React", "Next.js", "Typescript", "Chart.js", "TailwindCSS"],
      cover: dashka1,
      imgs: [dashka1, dashka2, dashka3, dashka4, dashka5],
    },
  ]);
  const [reviews] = useState([
    {
      id: 1,
      to: "https://www.weblancer.net/projects/html-verstka-32/verstka-lendinga-1153411/",
      title: "review-user-1",
      service: "Weblancer",
      text: "review-1",
    },
    {
      id: 2,
      to: "https://www.weblancer.net/projects/html-verstka-32/verstka-simplewealth-1112662/",
      title: "review-user-2",
      service: "Weblancer",
      text: "review-2",
    },
    {
      id: 3,
      to: "https://www.weblancer.net/projects/html-verstka-32/verstka-maketa-sajta-1126387/",
      title: "review-user-3",
      service: "Weblancer",
      text: "review-3",
    },
    {
      id: 4,
      to: "https://www.weblancer.net/projects/html-verstka-32/vyorstka-dizajn-maketov-1123304/",
      title: "review-user-4",
      service: "Weblancer",
      text: "review-4",
    },
    {
      id: 5,
      to: "https://www.weblancer.net/projects/html-verstka-32/verstka-lendinga-1140896/",
      title: "review-user-5",
      service: "Weblancer",
      text: "review-5",
    },
    {
      id: 6,
      to: "https://www.weblancer.net/projects/html-verstka-32/verstka-obnovlenij-sajta-1155164/",
      title: "review-user-6",
      service: "Weblancer",
      text: "review-6",
    },
  ]);
  const [skills] = useState([
    {
      id: 1,
      title: "HTML",
      img: <DiHtml5 />,
      text: "skill-text-1",
    },
    {
      id: 2,
      title: "CSS",
      img: <DiCss3 />,
      text: "skill-text-2",
    },
    {
      id: 3,
      title: "JavaScript",
      img: <DiJavascript />,
      text: "skill-text-3",
    },
    {
      id: 4,
      title: "React",
      img: <DiReact />,
      text: "skill-text-4",
    },
    {
      id: 5,
      title: "PUG/Jade",
      img: <SiPug />,
      text: "skill-text-5",
    },
    {
      id: 6,
      title: "SASS/SCSS",
      img: <DiSass />,
      text: "skill-text-6",
    },
    {
      id: 7,
      title: "Webpack",
      img: <SiWebpack />,
      text: "skill-text-7",
    },
    {
      id: 8,
      title: "Redux",
      img: <SiRedux />,
      text: "skill-text-8",
    },
    {
      id: 9,
      title: "TypeScript",
      img: <SiTypescript />,
      text: "skill-text-9",
    },
    {
      id: 10,
      title: "Tailwind CSS",
      img: <SiTailwindcss />,
      text: "skill-text-10",
    },
    {
      id: 11,
      title: "Figma",
      img: <FaFigma />,
      text: "skill-text-11",
    },
    {
      id: 12,
      title: "Photoshop",
      img: <DiPhotoshop />,
      text: "skill-text-12",
    },
  ]);
  const [contacts] = useState([
    {
      id: 1,
      to: "https://t.me/qwertycamedy",
      img: soc1,
      title: "Telegram",
    },
    {
      id: 2,
      to: "qwertycamedy@gmail.com",
      img: soc2,
      title: "Email",
    },
    {
      id: 3,
      to: "https://www.upwork.com/freelancers/qwertycamedy",
      img: soc3,
      title: "UpWork",
    },
    {
      id: 4,
      to: "https://www.weblancer.net/users/qwertycamedy/",
      img: soc4,
      title: "Weblancer",
    },
  ]);
  const [toggleContacts, setToggleContacts] = useState(false);
  const onToggleContacts = () => {
    setToggleContacts(!toggleContacts);
  };

  //scrollToTop
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //translate language
  const { t } = useTranslation();
  const [langMode, setLangMode] = useLocalStorage("language", "ru");
  const onLangChange = () => {
    if (langMode === "en") {
      i18n.changeLanguage("ru");
      setLangMode("ru");
    } else if (langMode === "ru") {
      i18n.changeLanguage("en");
      setLangMode("en");
    }
  };

  return (
    <AppContext.Provider
      value={{
        t,
        langMode,
        onLangChange,
        projects,
        reviews,
        skills,
        contacts,
        toggleContacts,
        onToggleContacts,
      }}
    >
      <div className="App flex justify-center w-full">
        <Navbar />
        <Contacts />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<Project />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="skills" element={<Skills />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
