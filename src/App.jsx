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

function App() {
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ }}>
        <div className="App flex items-center w-full justify-center">
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
