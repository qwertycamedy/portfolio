import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../Context";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import burgerImg from "../../assets/img/burger.svg";

import MyLogo from "../../UI/logo/MyLogo";

import nav1 from "../../assets/img/nav1.svg";
import nav2 from "../../assets/img/nav2.svg";
import nav3 from "../../assets/img/nav3.svg";
import nav4 from "../../assets/img/nav4.svg";
import nav5 from "../../assets/img/nav5.svg";
import nav6 from "../../assets/img/nav6.svg";

import logoImg from '../../assets/img/logo.svg'
import meImg from '../../assets/img/me.jpg'

import MyBtnC from "../../UI/btn-c/MyBtnC";

const Navbar = () => {
  const { t, langMode, onLangChange, contacts, onToggleContacts } =
    useContext(AppContext);

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

  const [themeMode, setThemeMode] = useLocalStorage("themeMode", "light");

  useEffect(() => {
    themeMode === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [themeMode]);

  const onThemeChange = () => {
    setThemeMode(currentValue => (currentValue === "dark" ? "light" : "dark"));
  };

  const [burger, setBurger] = useState(false);

  const onBurger = () => {
    setBurger(!burger);
    document.body.classList.toggle('overflow-h')
  };

  return (
    <aside className="navbar">
      <MyLogo classnames="navbar__logo" img={logoImg} />
      <div className={burger ? "navbar__inner active" : "navbar__inner"} onClick={onBurger}>
        <MyLogo classnames="navbar__img" img={window.innerWidth < 550 ? meImg : logoImg} />

        <h3 className="navbar__title sb">{t("Adil Kairbekov")}</h3>

        <p className="navbar__subtitle">{t("Frontend Developer")}</p>

        <ul className="navbar__social social">
          {contacts.map(contact =>
            contact.id === 2 ? (
              <li className="navbar__social-item social-item" key={contact.id}>
                <Link
                  to="#"
                  onClick={e => {
                    window.location.href = "mailto:qwertycamedy@gmail.com";
                    e.preventDefault();
                  }}
                >
                  <MyBtnC w="20" h="20" img={contact.img} />
                </Link>
              </li>
            ) : (
              <li className="navbar__social-item social-item" key={contact.id}>
                <Link to={contact.to} target="_blank">
                  <MyBtnC w="20" h="20" img={contact.img} />
                </Link>
              </li>
            )
          )}
        </ul>

        <ul className="navbar__menu">
          {navLinks.map(navLink =>
            navLink.id !== 6 ? (
              <li className="navbar__menu-item" key={navLink.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navbar__menu-link active" : "navbar__menu-link"
                  }
                  to={navLink.to}
                >
                  <MyBtnC w="18" h="18" img={navLink.img} />
                  <span className="text">{t(navLink.text)}</span>
                </NavLink>
              </li>
            ) : (
              <li className="navbar__menu-item" key={navLink.id}>
                <div
                  className="navbar__menu-link cursor-pointer"
                  onClick={onToggleContacts}
                >
                  <MyBtnC w="18" h="18" img={navLink.img} />
                  <span className="text">{t(navLink.text)}</span>
                </div>
              </li>
            )
          )}
        </ul>

        <ul className="navbar__switch-list">
          <li className="navbar__switch-item">
            <button
              className={
                themeMode === "dark" ? "switch switched" : "switch unswitched"
              }
              onClick={onThemeChange}
            >
              <svg
                className="switch__one"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM12 17C10.6167 17 9.43734 16.5123 8.462 15.537C7.48667 14.5617 6.99934 13.3827 7 12C7 10.6167 7.48767 9.43734 8.463 8.462C9.43834 7.48667 10.6173 6.99934 12 7C13.3833 7 14.5627 7.48767 15.538 8.463C16.5133 9.43834 17.0007 10.6173 17 12C17 13.3833 16.5123 14.5627 15.537 15.538C14.5617 16.5133 13.3827 17.0007 12 17ZM2 13C1.71667 13 1.479 12.904 1.287 12.712C1.095 12.52 0.999337 12.2827 1 12C1 11.7167 1.096 11.479 1.288 11.287C1.48 11.095 1.71734 10.9993 2 11H4C4.28334 11 4.521 11.096 4.713 11.288C4.905 11.48 5.00067 11.7173 5 12C5 12.2833 4.904 12.521 4.712 12.713C4.52 12.905 4.28267 13.0007 4 13H2ZM20 13C19.7167 13 19.479 12.904 19.287 12.712C19.095 12.52 18.9993 12.2827 19 12C19 11.7167 19.096 11.479 19.288 11.287C19.48 11.095 19.7173 10.9993 20 11H22C22.2833 11 22.521 11.096 22.713 11.288C22.905 11.48 23.0007 11.7173 23 12C23 12.2833 22.904 12.521 22.712 12.713C22.52 12.905 22.2827 13.0007 22 13H20ZM12 5C11.7167 5 11.479 4.904 11.287 4.712C11.095 4.52 10.9993 4.28267 11 4V2C11 1.71667 11.096 1.479 11.288 1.287C11.48 1.095 11.7173 0.999337 12 1C12.2833 1 12.521 1.096 12.713 1.288C12.905 1.48 13.0007 1.71734 13 2V4C13 4.28334 12.904 4.521 12.712 4.713C12.52 4.905 12.2827 5.00067 12 5ZM12 23C11.7167 23 11.479 22.904 11.287 22.712C11.095 22.52 10.9993 22.2827 11 22V20C11 19.7167 11.096 19.479 11.288 19.287C11.48 19.095 11.7173 18.9993 12 19C12.2833 19 12.521 19.096 12.713 19.288C12.905 19.48 13.0007 19.7173 13 20V22C13 22.2833 12.904 22.521 12.712 22.713C12.52 22.905 12.2827 23.0007 12 23ZM5.65 7.05L4.575 6C4.375 5.81667 4.279 5.58334 4.287 5.3C4.295 5.01667 4.391 4.775 4.575 4.575C4.775 4.375 5.01667 4.275 5.3 4.275C5.58334 4.275 5.81667 4.375 6 4.575L7.05 5.65C7.23334 5.85 7.325 6.08334 7.325 6.35C7.325 6.61667 7.23334 6.85 7.05 7.05C6.86667 7.25 6.63767 7.346 6.363 7.338C6.08834 7.33 5.85067 7.234 5.65 7.05ZM18 19.425L16.95 18.35C16.7667 18.15 16.675 17.9123 16.675 17.637C16.675 17.3617 16.7667 17.1327 16.95 16.95C17.1333 16.75 17.3627 16.6543 17.638 16.663C17.9133 16.6717 18.1507 16.7673 18.35 16.95L19.425 18C19.625 18.1833 19.721 18.4167 19.713 18.7C19.705 18.9833 19.609 19.225 19.425 19.425C19.225 19.625 18.9833 19.725 18.7 19.725C18.4167 19.725 18.1833 19.625 18 19.425ZM16.95 7.05C16.75 6.86667 16.654 6.63767 16.662 6.363C16.67 6.08834 16.766 5.85067 16.95 5.65L18 4.575C18.1833 4.375 18.4167 4.279 18.7 4.287C18.9833 4.295 19.225 4.391 19.425 4.575C19.625 4.775 19.725 5.01667 19.725 5.3C19.725 5.58334 19.625 5.81667 19.425 6L18.35 7.05C18.15 7.23334 17.9167 7.325 17.65 7.325C17.3833 7.325 17.15 7.23334 16.95 7.05ZM4.575 19.425C4.375 19.225 4.275 18.9833 4.275 18.7C4.275 18.4167 4.375 18.1833 4.575 18L5.65 16.95C5.85 16.7667 6.08734 16.675 6.362 16.675C6.63667 16.675 6.866 16.7667 7.05 16.95C7.25 17.1333 7.346 17.3627 7.338 17.638C7.33 17.9133 7.234 18.1507 7.05 18.35L6 19.425C5.81667 19.625 5.58334 19.721 5.3 19.713C5.01667 19.705 4.775 19.609 4.575 19.425Z" />
              </svg>

              <svg
                className="switch__two"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_522_308)">
                  <path d="M7.5 0.347385C7.62202 0.49565 7.69677 0.6771 7.71459 0.868288C7.73242 1.05948 7.6925 1.25162 7.6 1.41988C6.87732 2.74673 6.49992 4.234 6.5025 5.74488C6.5025 10.7711 10.6 14.8411 15.65 14.8411C16.3088 14.8411 16.95 14.7724 17.5662 14.6411C17.7552 14.6002 17.9519 14.6159 18.132 14.6861C18.3121 14.7564 18.4675 14.8781 18.5788 15.0361C18.6962 15.2004 18.7561 15.399 18.7491 15.6008C18.7421 15.8027 18.6686 15.9966 18.54 16.1524C17.5596 17.3567 16.3228 18.327 14.9198 18.9926C13.5168 19.6582 11.9829 20.0023 10.43 19.9999C4.6675 19.9999 0 15.3574 0 9.63738C0 5.33238 2.6425 1.63988 6.405 0.0748848C6.59242 -0.00432534 6.80049 -0.0205829 6.99794 0.0285544C7.19539 0.0776917 7.37156 0.189571 7.5 0.347385Z" />
                  <path d="M13.4925 3.9352C13.5104 3.88107 13.545 3.83397 13.5912 3.80058C13.6374 3.76719 13.693 3.74922 13.75 3.74922C13.807 3.74922 13.8626 3.76719 13.9088 3.80058C13.9551 3.83397 13.9896 3.88107 14.0075 3.9352L14.4913 5.3877C14.7075 6.0352 15.215 6.5427 15.8625 6.75895L17.315 7.2427C17.3691 7.26063 17.4162 7.29516 17.4496 7.34138C17.483 7.38761 17.501 7.44318 17.501 7.5002C17.501 7.55723 17.483 7.6128 17.4496 7.65902C17.4162 7.70525 17.3691 7.73978 17.315 7.7577L15.8625 8.24145C15.5432 8.34785 15.253 8.52716 15.015 8.76517C14.777 9.00318 14.5977 9.29336 14.4913 9.6127L14.0075 11.0652C13.9896 11.1193 13.9551 11.1664 13.9088 11.1998C13.8626 11.2332 13.807 11.2512 13.75 11.2512C13.693 11.2512 13.6374 11.2332 13.5912 11.1998C13.545 11.1664 13.5104 11.1193 13.4925 11.0652L13.0088 9.6127C12.9024 9.29336 12.7231 9.00318 12.485 8.76517C12.247 8.52716 11.9569 8.34785 11.6375 8.24145L10.185 7.7577C10.1309 7.73978 10.0838 7.70525 10.0504 7.65902C10.017 7.6128 9.99902 7.55723 9.99902 7.5002C9.99902 7.44318 10.017 7.38761 10.0504 7.34138C10.0838 7.29516 10.1309 7.26063 10.185 7.2427L11.6375 6.75895C11.9569 6.65256 12.247 6.47325 12.485 6.23524C12.7231 5.99722 12.9024 5.70705 13.0088 5.3877L13.4925 3.9352ZM17.3288 0.123953C17.3411 0.0883614 17.3642 0.0574984 17.3949 0.0356555C17.4256 0.0138126 17.4623 0.0020752 17.5 0.0020752C17.5377 0.0020752 17.5744 0.0138126 17.6051 0.0356555C17.6358 0.0574984 17.6589 0.0883614 17.6713 0.123953L17.9938 1.09145C18.1375 1.52395 18.4763 1.8627 18.9088 2.00645L19.8763 2.32895C19.9118 2.34129 19.9427 2.36442 19.9646 2.39511C19.9864 2.4258 19.9981 2.46253 19.9981 2.5002C19.9981 2.53787 19.9864 2.57461 19.9646 2.6053C19.9427 2.63599 19.9118 2.65911 19.8763 2.67145L18.9088 2.99395C18.6956 3.06486 18.5019 3.18447 18.3431 3.34331C18.1843 3.50214 18.0647 3.69581 17.9938 3.90895L17.6713 4.87645C17.6589 4.91205 17.6358 4.94291 17.6051 4.96475C17.5744 4.98659 17.5377 4.99833 17.5 4.99833C17.4623 4.99833 17.4256 4.98659 17.3949 4.96475C17.3642 4.94291 17.3411 4.91205 17.3288 4.87645L17.0063 3.90895C16.9354 3.69581 16.8157 3.50214 16.6569 3.34331C16.4981 3.18447 16.3044 3.06486 16.0913 2.99395L15.1238 2.67145C15.0882 2.65911 15.0573 2.63599 15.0355 2.6053C15.0136 2.57461 15.0019 2.53787 15.0019 2.5002C15.0019 2.46253 15.0136 2.4258 15.0355 2.39511C15.0573 2.36442 15.0882 2.34129 15.1238 2.32895L16.0913 2.00645C16.5238 1.8627 16.8625 1.52395 17.0063 1.09145L17.3288 0.125203V0.123953Z" />
                </g>
                <defs>
                  <clipPath id="clip0_522_308">
                    <rect width="20" height="20" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </li>
          <li className="navbar__switch-item">
            <button
              className={
                langMode === "en" ? "switch switched" : "switch unswitched"
              }
              onClick={onLangChange}
            >
              <span className={langMode === "en" ? "opacity04" : ""}>ru</span>
              <span className={langMode === "ru" ? "opacity04" : ""}>en</span>
            </button>
          </li>
        </ul>
      </div>
      <button
        className={
          burger ? "navbar__burger burger active" : "navbar__burger burger"
        }
        onClick={onBurger}
      >
        <img
          className="navbar__burger-img burger-img"
          src={burgerImg}
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
