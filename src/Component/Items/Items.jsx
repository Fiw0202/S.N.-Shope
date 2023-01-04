import React from 'react';

const Items = ({ id , title, image, price, description, rating }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} />
      <p>{price}</p>
      <p>{description}</p>
      <p>{rating}</p>
    </div>
  );
};

export default Items;