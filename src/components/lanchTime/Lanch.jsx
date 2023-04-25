import React from "react";
import FoodBlock from "../fastFood/FoodBlock";
import lanchDate from "./lanchDate";
const Lanch = () => {
  return (
    <div className="food">
      {lanchDate.map((obj) => (
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

export default Lanch;
