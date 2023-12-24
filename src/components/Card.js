import React from 'react';
import './cardStyle.css';
import '../App.css';

function Card(props) {
  return (
    <div className="card">
      <div class="card__image-container">
        <img src={props.item.coverImg} alt={`${props.item.title} cover`} />
      </div>
      <div className="card__info">
          <div className="likes">
            <i className="fas fa-heart" id='likesbadge'></i>
            <span className='card__content__title'>{props.item.likes}</span>
          </div>
          <div className="views">
            <i className="fas fa-eye"></i>
            <span className='card__content__title'>{props.item.Views}</span>
          </div>
        </div>
      <div className="card__content">
      
        <p className="card__title">{props.item.title}</p>
        <p className="cardLocation"><span className='card__content__title'>Location : </span>{props.item.location}</p>
        <p className='cardDescription'>    <span className='card__content__title'>Description : </span>{props.item.description}</p>
        <p className="cardAuthor"><span className='card__content__title'>By : </span>{props.item.author}</p>
      </div>
    </div>
  );
}

export default Card;
