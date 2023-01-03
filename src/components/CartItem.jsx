import React from "react";
import { useDispatch } from "react-redux";
import { minusItem, plusItem, removeItem } from "../redux/cartSlice";
import "./cart.scss";
const CartItem = ({ id, img, name, count, price, type, size, basis }) => {
  const dispatch = useDispatch();
  // const { totalPrice } = useSelector((state) => state.cart);
  const addPizza = () => {
    dispatch(plusItem({ id, price }));
  };
  const removePizza = () => {
    dispatch(minusItem({ id, price }));
  };
  const clearItem = () => {
    dispatch(removeItem({ id, price, count }));
  };
  return (
    <div className="cart__oder">
      <div className="cart__date">
        <div onClick={clearItem} className="close">
          ✕
        </div>
        <div className="cart__date-item">
          <div>
            <img className="cart__date-img" src={img} alt="" />
          </div>
          <div>
            <div className="cart__date-name">{name}</div>
            <div className="cart__date-descriptions">
              тісто: {type} <br /> розмір: {size} <br />
              основа: {basis}
            </div>
            {/* <div className="cart__date-descriptions"></div>
              <div className="cart__date-descriptions"></div> */}
          </div>
        </div>
        <div className="cart__date-amount">
          <div>
            <div className="button-count">
              <p onClick={removePizza} className="button">
                -
              </p>
              <p className="count">{count}</p>
              <p onClick={addPizza} className="button">
                +
              </p>
            </div>
          </div>
        </div>
        <div className="cart__date-price">
          {price * count} <span style={{ color: "black" }}>грн</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
