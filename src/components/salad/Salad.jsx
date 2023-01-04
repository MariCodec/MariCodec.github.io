import React from "react";
import FoodBlock from "../fastFood/FoodBlock";
import saladDate from "./saladDate";
const Salad = () => {
  return (
    <div className="food">
      {saladDate.map((obj) => (
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
  );
};

export default Salad;
