import React from "react";
import FastFoodBlock from "./FastFoodBlock";
import fastFoodDate from "./fastFoodDate";
import "./fastFood.scss";
const FastFood = () => {
  return (
    <div>
      <div className="food">
        {fastFoodDate.map((obj) => (
          <FastFoodBlock
            key={obj.id}
            name={obj.name}
            img={obj.src}
            id={obj.id}
            description={obj.description}
            price={obj.price}
          />
        ))}
      </div>
      <div>додатки соуси</div>
    </div>
  );
};

export default FastFood;
