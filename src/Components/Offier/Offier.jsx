import React from "react";
import "./Offier.css";
import exclusive_image from '../Assets/exclusive_image.png'

const Offier = () => {
  return (
    <div className="offers">
      <div className="row align-items-center">
        <div className="col-md-6 offers-left-col">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="col-md-6 offers-right-col d-flex justify-content-end ">
            <img src={exclusive_image} alt="offer image" />
        </div>
      </div>
    </div>
  );
};

export default Offier;
