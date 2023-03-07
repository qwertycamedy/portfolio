import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import MyBtn from "../btn/MyBtn";

const MyLink = ({ classNames, to, text }) => {
  const { t } = useContext(AppContext);
  return (
    <Link to={to}>
      <MyBtn classNames={classNames}>{t(text)}</MyBtn>
    </Link>
  );
};

export default MyLink;
