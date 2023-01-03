import PizzaBlock from "./PizzaBlock";
import pizzaDate from "./pizzaDate";
import "./pizzaBlock.scss";
import cheese from "./img/cheese.png";
import meat from "./img/meat.png";
import vegetables from "./img/vegetables.png";
import { useState } from "react";
const Pizza = () => {
  const [size, setSizes] = useState();
  const sizes = ["33см ", "45cм"];

  return (
    <div>
      <div className="food">
        {pizzaDate.map((obj) => (
          <PizzaBlock
            pizza={obj}
            key={obj.name}
            id={obj.id}
            type={obj.types}
            img={obj.src}
            price={obj.price}
            name={obj.name}
          />
        ))}

        <div className="adds">
          <div className="adds__title">ДОДАТКИ</div>
          <div className="adds__list">
            <div className="adds__content">
              <div className="adds__img">
                <img className="adds__image" src={cheese} alt="" />
              </div>
              <div className="adds__text">Додатковий сир</div>
              <div className="adds__price">
                {sizes.map((s, i) => (
                  <>
                    <span
                      key={i}
                      onClick={() => setSizes(s)}
                      className={size === s ? "activePrice" : ""}
                    >
                      {s}
                    </span>
                  </>
                ))}
              </div>
              <div className="adds__button">
                <button>додати</button>
              </div>
            </div>
            <div className="adds__content">
              <div className="adds__img">
                <img className="adds__image" src={meat} alt="" />
              </div>
              <div className="adds__text">Додаткове м'ясо</div>
              <div className="adds__price">
                50 гр / 25 грн <br />
                <br />
                70 гр / 35 грн
              </div>
              <div className="adds__button">
                <button>додати</button>
              </div>
            </div>
            <div className="adds__content">
              <div className="adds__img">
                <img className="adds__image" src={vegetables} alt="" />
              </div>
              <div className="adds__text">Додаткові овочі</div>
              <div className="adds__price">
                33 см / 25 грн <br />
                <br />
                45 см / 35 грн
              </div>
              <div className="adds__button">
                <button>додати</button>
              </div>
            </div>
            <div className="adds__content">
              <div className="adds__img">
                <img className="adds__image" src={vegetables} alt="" />
              </div>
              <div className="adds__text">Додаткові овочі</div>
              <div className="adds__price">
                33 см / 25 грн <br />
                <br />
                45 см / 35 грн
              </div>
              <div className="adds__button">
                <button>додати</button>
              </div>
            </div>
            <div className="adds__content">
              <div className="adds__img">
                <img className="adds__image" src={vegetables} alt="" />
              </div>
              <div className="adds__text">Додаткові овочі</div>
              <div className="adds__price">
                33 см / 25 грн <br />
                <br />
                45 см / 35 грн
              </div>
              <div className="adds__button">
                <button>додати</button>
              </div>
            </div>
            <div className="adds__content">
              <div className="adds__img">
                <img className="adds__image" src={vegetables} alt="" />
              </div>
              <div className="adds__text">Додаткові овочі</div>
              <div className="adds__price">
                33 см / 25 грн <br />
                <br />
                45 см / 35 грн
              </div>
              <div className="adds__button">
                <button>додати</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
