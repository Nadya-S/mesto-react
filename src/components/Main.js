import React, { useEffect, useState } from "react";
import Api from "../utils/Api";
import Card from "./Card";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await Api.getUserInfo();
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      } catch (err) {
        console.error(`Ошибка: ${err}`);
      }
    };
    getUser();

    const getCards = async () => {
      try {
        const cards = await Api.getInitialCards();
        setCards(cards);
      } catch (err) {
        console.error(`Ошибка: ${err}`);
      }
    };
    getCards();
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-button"
          onClick={onEditAvatar}
        ></button>
        <img className="profile__avatar" src={userAvatar} alt="аватар" />

        <div className="profile__info">
          <div className="profile__edit-form">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__about">{userDescription}</p>
          </div>
          <button
            className="button profile__edit-button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="button profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="places">
        <ul className="list places__list">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
