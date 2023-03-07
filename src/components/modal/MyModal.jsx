import React from "react";

const MyModal = ({ active, onClick, children }) => {
  return (
    <div
      className={active ? ` overlay overlay__active` : ` overlay`}
      onClick={onClick}
    >
      <div
        className={"modal flex flex-col gap-4"}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
