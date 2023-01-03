import React from "react";
import "../footer/footer.scss";
import img1 from "./img/insta.jpeg";
import img2 from "./img/insta1.webp";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="footer__title">
          <h2>Слідкуй за новинами Brio у Instagram</h2>
        </div> */}
        <div className="footer__content">
          <div className="footer__link">
            <a className="link-instagram" href="./img/pizza/3397_img.jpeg">
              <img className="img" src={img2} alt="" />
            </a>
            <a
              className="link-instagram"
              href="https://www.instagram.com/pizzabrio/"
            >
              <img className="img" src={img1} alt="" />
            </a>
            <a
              className="link-instagram"
              href="./https://www.instagram.com/pizzabrio/"
            >
              <img className="img" src={img1} alt="" />
            </a>
          </div>
          <div className="footer__contact">
            <div className="num">097-00-00-00</div>
            <div className="adress">
              kyiv <br />
              вул. Львівська 1
            </div>
          </div>
          <div>
            <h1>rfhnf</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
