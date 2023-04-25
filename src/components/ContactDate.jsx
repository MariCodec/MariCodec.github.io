import React from "react";

const ContactDate = () => {
  return (
    <div className="container-oder">
      <div className="description-title">Інформація для доставки</div>
      <div className="oder-date">
        <div>
          <input type="text" name="username" placeholder="* Ваше імʼя" />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            // placeholder="+xx (xxx) xxx xx xx"
            placeholder="* Ваш номер телефону"
          />
        </div>
        <div>
          <input type="email" placeholder="E-mail" />
        </div>
        <div className="oder-adress">
          <input type="text" placeholder="* вулиця" />
          <input type="text" placeholder="* № будинку" />
        </div>
        <div className="oder-adress-home">
          <input type="number" placeholder="підїзд " />
          <input type="number" placeholder="поверх " />
          <input type="number" placeholder="квартира " />
          <input type="text" placeholder="домофон " />
        </div>
      </div>
    </div>
  );
};

export default ContactDate;
