import React from "react";
import cheese from "./img/cheese.png";
import meat from "./img/meat.png";
import vegetables from "./img/vegetables.png";
import { useState } from "react";
const AddsList = () => {
  const [size, setSizes] = useState(0);

  const sizes = ["50 грам", "70 грам"];
  const price = ["25", "35"];
  const s = size === 0 ? price[0] : price[1];
  return (
    <div className="adds__list">
      <div className="adds__content">
        <img src={cheese} alt="" />

        <div className="adds__text">Додатковий сир</div>
        <div className="adds__price">
          {sizes.map((s, index) => (
            <p
              key={index}
              onClick={() => setSizes(index)}
              className={size === index ? "activePrice" : " "}
            >
              {s}
            </p>
          ))}
        </div>
        <div className="adds-button">
          <div>
            {s} <span>грн</span>
          </div>
          <div>
            <button>додати</button>
          </div>
        </div>
      </div>
      <div className="adds__content">
        <img src={meat} alt="" />

        <div className="adds__text">Додаткове м'ясо</div>
        <div className="adds__price">
          {sizes.map((s, index) => (
            <p
              key={index}
              onClick={() => setSizes(index)}
              className={size === index ? "activePrice" : " "}
            >
              {s}
            </p>
          ))}
        </div>
        <div className="adds-button">
          <div>
            {s} <span>грн</span>
          </div>
          <div>
            <button>додати</button>
          </div>
        </div>
      </div>
      <div className="adds__content">
        <img src={vegetables} alt="" />

        <div className="adds__text">Додаткові овочі</div>
        <div className="adds__price">
          {sizes.map((s, index) => (
            <p
              key={index}
              onClick={() => setSizes(index)}
              className={size === index ? "activePrice" : " "}
            >
              {s}
            </p>
          ))}
        </div>
        <div className="adds-button">
          <div>
            {s} <span>грн</span>
          </div>
          <div>
            <button>додати</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddsList;
