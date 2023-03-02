import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { AppContext } from "./Context";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Reviews from "./pages/reviews/Reviews";
import Skills from "./pages/skills/Skills";
import "./styles/App.scss";
import i18n from './i18n';
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const { t } = useTranslation();
  const [langMode, setLangMode] = useLocalStorage('language', 'ru');

  const onLangChange = () => {
      if (langMode === 'en') {
          i18n.changeLanguage('ru');
          setLangMode('ru');
      } else if (langMode === 'ru') {
          i18n.changeLanguage('en');
          setLangMode('en');
      }
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ t, langMode, onLangChange }}>
        <div className="App flex justify-center w-full">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
