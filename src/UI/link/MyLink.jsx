import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import MyBtn from "../btn/MyBtn";

const MyLink = ({ classNames, to, text, target }) => {
  const { t } = useContext(AppContext);
  return (
    <Link to={to} target={target}>
      <MyBtn classNames={classNames}>{t(text)}</MyBtn>
    </Link>
  );
};

export default MyLink;
