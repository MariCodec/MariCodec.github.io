import React from "react";

const FoodBlock = ({ id, img, name, description, price }) => {
  return (
    <div className="foodBlock">
      <div className="foodBlock__foodImage">
        <img src={img} alt="" />
      </div>
      <div>
        <div className="foodBlock__name">{name}</div>
        <p> {description}</p>
      </div>

      <div className="foodBlock__button">
        <div className="foodBlock__price">
          {price} <span>грн</span>
        </div>
        <div>
          <button>замовити</button>
        </div>
      </div>
    </div>
  );
};

export default FoodBlock;
