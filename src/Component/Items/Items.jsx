import React from 'react';

const Items = ({ id , title, Image, price, description, Rating }) => {
  return (
    <div className ="Item">
      
      <h2 className="title">{title}</h2>
      <h2 className="id">{id}</h2>
      <img src={Image} />
      <p className="price">{price}</p>
      <p className="rating">{Rating}</p>
      <p className="description">{description}</p>
      
    </div>
  );
};

export default Items;