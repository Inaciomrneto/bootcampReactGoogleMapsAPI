import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import Skeleton from '../Skeleton';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

import imgExemple from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImagemLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : imgExemple}
        onLoad={() => setImagemLoaded(true)}
        alt="Foto do restaurante"
      />
      {!imageLoaded && <Skeleton width="100px" heigth="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
