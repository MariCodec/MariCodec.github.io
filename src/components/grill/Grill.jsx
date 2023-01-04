import React from "react";
import FoodBlock from "../fastFood/FoodBlock";
import grillDate from "./grillDate";

const Grill = () => {
  return (
    <div className="food">
      {grillDate.map((obj) => (
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

export default Grill;
