import React from "react";
import { Link } from "react-router-dom";


// TODO: Here retreive the properties id, brand, model, image, price, and topSpeed from the props, and then type the props

export const CarCard = () => {
  return (
    <Link class="car-card" to={`/cars/${id}`}>
      <h2>{brand}</h2>
      <h3>{model}</h3>
      <img src={image} alt="" />
      <div className="card-infobar">
        <p>$ {price}</p>
        <p className="card-speed">{topSpeed} mph</p>
      </div>
    </Link>
  );
};
