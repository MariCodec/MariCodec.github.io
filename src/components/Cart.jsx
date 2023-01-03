import React from "react";
import "./cart.scss";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import ContactDate from "./ContactDate";
const Cart = () => {
  const cartItem = useSelector((state) => state.cart.items);
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="cart">
      <h1 className="cart__header">Oформлення замовлення</h1>

      <div className="cart-oder">
        <div className="contact">
          <ContactDate />
        </div>
        <div className="oder">
          <div class="description-title">Ваше замовлення</div>

          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="submit">
        <div>
          <span>
            сума: <span style={{ color: " #a20606" }}>{totalPrice}</span> грн
          </span>
          <button className="submit-button"> оформити замовлення </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
