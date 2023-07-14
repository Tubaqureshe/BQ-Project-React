import React from 'react';

function Cartitems({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div className="card cart-item">
      <img src={product.thumbnail} alt={product.title} className="card-img-top cart-item-image" />
      <div className="card-body">
        <h5 className="card-title cart-item-title">{product.title}</h5>
        <p className="card-text cart-item-price">{product.price}</p>
      </div>
    </div>
  );
}

export default Cartitems;