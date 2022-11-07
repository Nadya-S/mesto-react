import React from 'react';

const Card = ({
    card,
    onCardClick
}) => {
        const handleClick = () => {
            onCardClick(card);
            };

        return (
            <li className="place">
            <img src={card.link} alt={card.name} className="place__image" onClick={handleClick} />
              <button className="button place__delete-button"></button>
              <div className="place__description">
              <h2 className="place__name">{card.name}</h2>
            <div>
              <button className="button place__like-button"></button>
              <div className="place__like-counter">{card.likes.length}</div>
            </div>
          </div>
        </li>
        )    
};

export default Card;