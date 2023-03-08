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
import cover1 from "./assets/img/sneakers-square.webp";
import cover2 from "./assets/img/toodoo.webp";
import cover3 from "./assets/img/trify.webp";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiPhotoshop,
  DiSass,
} from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { SiPug, SiRedux, SiTailwindcss, SiTypescript, SiWebpack } from "react-icons/si"
import soc1 from "./assets/img/tg.svg";
import soc2 from "./assets/img/em.svg";
import soc3 from "./assets/img/uw.svg";
import soc4 from "./assets/img/wl.svg";

function App() {
  //store
  const [projects] = useState([
    {
      id: 1,
      to: "",
      title: "Sneakers Square",
      type: ["E-Commerce", "SPA"],
      skills: ["React"],
      cover: cover1,
      imgs: [cover1, cover1, cover1],
    },
    {
      id: 2,
      to: "",
      title: "Trify",
      type: ["E-Commerce", "Multipage"],
      skills: ["HTML", "CSS", "JS"],
      cover: cover3,
      imgs: [cover3],
    },
    {
      id: 3,
      to: "",
      title: "Trify",
      type: ["E-Commerce", "Multipage"],
      skills: ["HTML", "CSS", "JS"],
      cover: cover3,
      imgs: [cover3],
    },
    {
      id: 4,
      to: "",
      title: "Trify",
      type: ["E-Commerce", "Multipage"],
      skills: ["HTML", "CSS", "JS"],
      cover: cover3,
      imgs: [cover3],
    },
    {
      id: 5,
      to: "",
      title: "TooDoo",
      type: ["Planer", "SPA"],
      skills: ["React"],
      cover: cover2,
      imgs: [cover2],
    },
    {
      id: 6,
      to: "",
      title: "Trify",
      type: ["E-Commerce", "Multipage"],
      skills: ["HTML", "CSS", "JS"],
      cover: cover3,
      imgs: [cover3],
    },
    {
      id: 7,
      to: "",
      title: "Trify",
      type: ["E-Commerce", "Multipage"],
      skills: ["HTML", "CSS", "JS"],
      cover: cover3,
      imgs: [cover3],
    },
    {
      id: 8,
      to: "",
      title: "Trify",
      type: ["E-Commerce", "Multipage"],
      skills: ["HTML", "CSS", "JS"],
      cover: cover3,
      imgs: [cover3],
    },
  ]);
  const [reviews] = useState([
    {
      id: 1,
      to: "weblancer.net/projects/html-verstka-32/verstka-lendinga-1153411/",
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
      to: "weblancer.net/projects/html-verstka-32/verstka-lendinga-1153411/",
      title: "review-user-1",
      service: "Weblancer",
      text: "review-1",
    },
    {
      id: 5,
      to: "https://www.weblancer.net/projects/html-verstka-32/verstka-simplewealth-1112662/",
      title: "review-user-2",
      service: "Weblancer",
      text: "review-2",
    },
    {
      id: 6,
      to: "https://www.weblancer.net/projects/html-verstka-32/verstka-maketa-sajta-1126387/",
      title: "review-user-3",
      service: "Weblancer",
      text: "review-3",
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
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

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
