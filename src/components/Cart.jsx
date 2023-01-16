import React from "react";
import "./cart.scss";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
const Cart = () => {
  const cartItem = useSelector((state) => state.cart.items);
  const { totalPrice } = useSelector((state) => state.cart);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="cart">
      <h1 className="cart__header">Oформлення замовлення</h1>

      <div className="cart-oder">
        <div className="contact">
          <div className="container-oder">
            <div className="description-title">Інформація для доставки</div>
            <form onSubmit={handleSubmit(onSubmit)} className="oder-date">
              <div>
                <input
                  {...register("userName", {
                    required: "введіть ваше імʼя",
                  })}
                  type="text"
                  placeholder="* Ваше імʼя"
                />

                {errors?.userName && (
                  <p className="errors">{errors.userName.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("userPhone", {
                    required: "введіть ваш номер",
                  })}
                  type="tel"
                  // placeholder="+xx (xxx) xxx xx xx"
                  placeholder="* Ваш номер телефону"
                />

                {errors?.userPhone && (
                  <p className="errors">{errors.userPhone.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("userEmail", {
                    required: "введіть ваш email",
                  })}
                  type="email"
                  placeholder="* E-mail"
                />

                {errors?.userEmail && (
                  <p className="errors">{errors.userEmail.message}</p>
                )}
              </div>

              <div className="oder-adress">
                <div>
                  <input
                    {...register("street", {
                      required: "необхідно заповнити це поле",
                    })}
                    placeholder="* вулиця"
                  />

                  {errors?.street && (
                    <p className="errors"> {errors.street.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("numberStreet", {
                      required: "необхідно заповнити це поле",
                    })}
                    placeholder="* № будинку"
                  />

                  {errors?.numberStreet && (
                    <p className="errors">{errors.numberStreet.message}</p>
                  )}
                </div>
              </div>
              <div className="oder-adress-home">
                <input type="number" placeholder="підїзд " />
                <input type="number" placeholder="поверх " />
                <input type="number" placeholder="квартира " />
                <input type="text" placeholder="домофон " />
              </div>
            </form>
          </div>
        </div>
        <div className="oder">
          <div className="description-title">Ваше замовлення</div>

          {cartItem.map((item, i) => (
            <CartItem key={i} {...item} />
          ))}
        </div>
      </div>
      <div className="submit">
        <span>
          сума: <span style={{ color: " #a20606" }}>{totalPrice}</span> грн
        </span>
        <button className="submit-button"> замовити</button>
      </div>
    </div>
  );
};

export default Cart;
