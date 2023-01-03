import { useState } from "react";
import "./pizzaBlock.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

const PizzaBlock = ({ id, pizza, type, img, price, name }) => {
  const dispatch = useDispatch();
  // const cartItem = useSelector((state) => {
  //   state.cart.item.find((obj) => obj.id === id);
  // });

  const [activeType, setactiveTipe] = useState(0);
  const [activeSize, setactiveSize] = useState(0);
  const [activeBasis, setactiveBasis] = useState(0);

  const types = ["тонке", "грубе"];
  const sizes = ["33cм", "45см"];
  const basis = ["вершкова", "томатна"];
  const sum = activeSize === 0 ? price[0] : price[1];
  console.log(sum);

  const onClickAdd = () => {
    const item = {
      id,
      img,
      price: sum,
      name,
      type: types[activeType],
      size: sizes[activeSize],
      basis: basis[activeBasis],
    };

    dispatch(addItem(item));
    console.log(item);
  };

  const selectBasis = (index) => {
    setactiveBasis(index);
  };

  return (
    <div className="food__content">
      <div className="food__img">
        <img className="food-image" src={img} alt="vvv" />
      </div>
      <div className="food__title">{pizza.name}</div>

      <div className="food__descriptions">{pizza.description}</div>
      <div className="pizza-selector">
        <ul>
          <span className="title"> Тісто </span>
          {type.map((t) => (
            <li
              key={t}
              onClick={() => setactiveTipe(t)}
              className={activeType === t ? "active" : " "}
            >
              {types[t]}
            </li>
          ))}
        </ul>
        <ul>
          <span className="title">основа</span>

          {basis.map((b, index) => (
            <li
              key={b}
              onClick={() => selectBasis(index)}
              className={activeBasis === index ? "active" : " "}
            >
              {b}
            </li>
          ))}
        </ul>

        <ul>
          <span className="title">розмір</span>

          {sizes.map((size, index) => (
            <li
              key={size}
              onClick={() => setactiveSize(index)}
              className={activeSize === index ? "active" : " "}
            >
              {size}
              {/* {size === "33cм" ? price[0] : price[1]} */}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="countProduct"> */}
      {/* <button className="counter" onClick={addPizza}>
          {" "}
          +{" "}
        </button>
        <span className="count"> {count} </span>
        <button className="counter" onClick={removePizza}>
          -{" "}
        </button> */}
      {/* <div style={{ color: "#a20606" }}>{sum}</div> */}
      {/* грн
      </div> */}

      <div className="button">
        <div className="totalPrice">
          {sum} <span style={{ color: "black" }}>грн</span>
        </div>
        <div>
          <button onClick={onClickAdd} className="button-link">
            замовити
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
