import React from "react";

const PopupWithForm = ({ title, name, children, isOpen, onClose, buttonText }) => {
  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <form className="popup__container" id={`form-${name}`}>
        <button
          className="button popup__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button className="button popup__button-save" type="submit" disabled>
          {buttonText || "Сохранить"}
        </button>
      </form>
    </div>
  );
};

export default PopupWithForm;
