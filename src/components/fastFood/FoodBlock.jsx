import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
const FoodBlock = ({ id, img, name, description, price }) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      img,
      price,
      name,
    };

    dispatch(addItem(item));
    console.log(item);
  };

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
          <button onClick={onClickAdd}>замовити</button>
        </div>
      </div>
    </div>
  );
};

export default FoodBlock;
