import React from "react";
import FoodBlock from "./FoodBlock";
import fastFoodDate from "./fastFoodDate";
import "./fastFood.scss";
const FastFood = () => {
  return (
    <div>
      <div className="food">
        {fastFoodDate.map((obj) => (
          <FoodBlock
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
