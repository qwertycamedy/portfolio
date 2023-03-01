import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AppContext } from "../../Context";
import MyLogo from "../../UI/logo/MyLogo";

import MySwitch from "../../UI/switch/MySwitch";
import MeImg from "../../UI/meImg/MeImg";

import soc1 from "../../assets/img/tg.svg";
import soc2 from "../../assets/img/em.svg";
import soc3 from "../../assets/img/uw.svg";
import soc4 from "../../assets/img/wl.svg";

import nav1 from "../../assets/img/nav1.svg";
import nav2 from "../../assets/img/nav2.svg";
import nav3 from "../../assets/img/nav3.svg";
import nav4 from "../../assets/img/nav4.svg";
import nav5 from "../../assets/img/nav5.svg";
import nav6 from "../../assets/img/nav6.svg";

import dThImg from "../../assets/img/dTh.svg";
import lThImg from "../../assets/img/lTh.svg";
import enLImg from "../../assets/img/enL.svg";
import ruLImg from "../../assets/img/ruL.svg";
import MyBtnC from "../../UI/btn-c/MyBtnC";

const Navbar = () => {
  // const { } = useContext(AppContext);

  const [socLinks] = useState([
    {
      id: 1,
      img: soc1,
      to: "https://t.me/qwertycamedy",
    },
    {
      id: 2,
      img: soc2,
      to: "qwertycamedy@gmail.com",
    },
    {
      id: 3,
      img: soc3,
      to: "https://www.upwork.com/freelancers/qwertycamedy",
    },
    {
      id: 4,
      img: soc4,
      to: "https://www.weblancer.net/users/qwertycamedy/",
    },
  ]);
  const [navLinks] = useState([
    {
      id: 1,
      img: nav1,
      to: "/",
      text: "Home",
    },
    {
      id: 2,
      img: nav2,
      to: "about",
      text: "About",
    },
    {
      id: 3,
      img: nav3,
      to: "projects",
      text: "Projects",
    },
    {
      id: 4,
      img: nav4,
      to: "reviews",
      text: "Reviews",
    },
    {
      id: 5,
      img: nav5,
      to: "skills",
      text: "Skills",
    },
    {
      id: 6,
      img: nav6,
      to: "contacts",
      text: "Contacts",
    },
  ]);
  const [switches] = useState([
    {
      id: 1,
      left: lThImg,
      right: dThImg,
    },
    {
      id: 2,
      left: ruLImg,
      right: enLImg,
    },
  ]);

  return (
    <aside className="navbar">
      <MyLogo classnames="navbar__logo" />
      <div className="navbar__inner">
        <MeImg w="100" h="100" classnames="navbar__img" />

        <h3 className="navbar__title sb">Adil Kairbekov</h3>

        <p className="navbar__subtitle">Frontend Developer</p>

        <ul className="navbar__social social">
          {socLinks.map(socLink => (
            <li className="navbar__social-item social-item" key={socLink.id}>
              <Link to={socLink.to} target="_blank">
                <MyBtnC w="20" h="20" img={socLink.img} />
              </Link>
            </li>
          ))}
        </ul>

        <ul className="navbar__menu">
          {navLinks.map(navLink => (
            <li className="navbar__menu-item" key={navLink.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navbar__menu-link active" : "navbar__menu-link"
                }
                to={navLink.to}
              >
                <MyBtnC w="18" h="18" img={navLink.img} />
                <span className="text">{navLink.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="navbar__switch-list">
          {switches.map(mySwitch => (
            <li className="navbar__switch-item" key={mySwitch.id}>
              <MySwitch mySwitch={mySwitch} />
            </li>
          ))}
        </ul>
      </div>
      <button className="navbar__burger burger">
        <img
          className="navbar__burger-img burger-img"
          src="img/burger.svg"
          loading="lazy"
          width="32"
          height="32"
          alt="img"
        />
      </button>
    </aside>
  );
};

export default Navbar;
