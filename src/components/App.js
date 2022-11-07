import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import React, { useState } from "react";

const App = () => {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="edit-avatar"
        title="Обновить аватар"
        buttonText=""
        children={
          <label className="popup__field">
            <input
              id="url-input-avatar"
              name="url_input"
              type="url"
              className="popup__input"
              required
              placeholder="Ссылка на картинку"
            />
            <span className="url-input-avatar-error popup__input-error"></span>
          </label>
        }
      />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
        buttonText=""
        children={
          <>
            <label className="popup__field">
              <input
                id="name-input"
                name="profile_name_input"
                type="text"
                className="popup__input"
                minLength="2"
                maxLength="40"
                required
                placeholder="Имя"
              />
              <span className="name-input-error popup__input-error"></span>
            </label>
            <label className="popup__field">
              <input
                id="about-input"
                name="about_input"
                type="text"
                className="popup__input"
                minLength="2"
                maxLength="200"
                required
                placeholder="О себе"
              />
              <span className="about-input-error popup__input-error"></span>
            </label>
          </>
        }
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-place"
        title="Новое место"
        buttonText=""
        children={
          <>
            <label className="popup__field">
              <input
                id="card-name-input"
                name="card_name_input"
                className="popup__input"
                type="text"
                minLength="2"
                maxLength="30"
                required
                placeholder="Название"
              />
              <span className="card-name-input-error popup__input-error"></span>
            </label>
            <label className="popup__field">
              <input
                id="url-input"
                name="url_input"
                type="url"
                className="popup__input"
                required
                placeholder="Ссылка на картинку"
              />
              <span className="url-input-error popup__input-error"></span>
            </label>
          </>
        }
      />
      <PopupWithForm
        name="confirmation"
        title="Вы уверены?"
        buttonText="Вы уверены?"
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
};

export default App;
