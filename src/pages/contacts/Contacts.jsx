import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import MyBtnC from "../../UI/btn-c/MyBtnC";
import cl from "./Contacts.module.scss";
import { CgClose } from "react-icons/cg";
import MyModal from "../../components/modal/MyModal";
import { FaFilePdf } from "react-icons/fa";

const Contacts = () => {
  const { t, contacts, toggleContacts, onToggleContacts } =
    useContext(AppContext);

  return (
    <MyModal active={toggleContacts} onClick={onToggleContacts}>
      <div className="flex items-center justify-between">
        <h3 className={cl.title + " title-section"}>{t("Contacts")}</h3>
        <button className={cl.close} onClick={onToggleContacts}>
          <CgClose />
        </button>
      </div>
      <ul className="flex flex-col pl-6 gap-4 max-w-max">
        {contacts.map(contact =>
          contact.id === 2 ? (
            <li key={contact.id}>
              <Link
                className={cl.link + " flex gap-4 items-center"}
                to="#"
                onClick={e => {
                  window.location.href = "mailto:qwertycamedy@gmail.com";
                  e.preventDefault();
                }}
              >
                <MyBtnC w="20" h="20" img={contact.img} />
                <span>{t(contact.title)}</span>
              </Link>
            </li>
          ) : (
            <li key={contact.id}>
              <Link
                className={cl.link + " flex gap-4 items-center"}
                to={contact.to}
                target="_blank"
              >
                <MyBtnC w="20" h="20" img={contact.img} />
                <span>{t(contact.title)}</span>
              </Link>
            </li>
          )
        )}
        <li>
          <Link
            className={cl.link + " flex gap-4 items-center"}
            to={"https://qwertycamedy.ru/Adil_Kairbekov_Frontend-Developer.pdf"}
            target="_blank"
          >
            <button className="navbar__social-resume">
              <FaFilePdf size={17} />
            </button>
            <span>{t("Resume")}</span>
          </Link>
        </li>
      </ul>
    </MyModal>
  );
};

export default Contacts;
