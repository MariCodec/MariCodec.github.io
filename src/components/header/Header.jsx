import { Link } from "react-router-dom";
import logo from "./logo/logotipe.png";
import "./header.scss";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const Header = () => {
  const { totalPrice } = useSelector((state) => state.cart);
  const cartItem = useSelector((state) => state.cart.items);
  console.log(cartItem);
  const itemCount = cartItem.map((obj) => obj.count);
  const totalCount = itemCount.reduce((c, s) => {
    return c + s;
  }, 0);
  console.log(totalCount);
  return (
    <div className="wrapper">
      <header className="header">
        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <nav>
          <Link className="header__nav-Link" to="/">
            home
          </Link>
          <Link className="header__nav-Link" to="/pizza">
            Pizza
          </Link>
          <Link className="header__nav-Link" to="/FastFood">
            Fast food
          </Link>
          <Link className="header__nav-Link" to="/grill">
            Grill
          </Link>
          <Link className="header__nav-Link" to="/salad">
            Salad
          </Link>
          <Link className="header__nav-Link" to="/LunchTime">
            lunch-time
          </Link>
        </nav>

        <div>
          <p style={{ textAlign: "center" }}> 097 00 00 00</p> Пн-Нд 11:00 -
          22:00
        </div>
        <Link className="cartButton" to={"/cart"}>
          <span className="cartItem">{totalCount}</span>
          <BsFillCartCheckFill className="cart" />

          <span>{totalPrice}</span>
        </Link>
      </header>
    </div>
  );
};

export default Header;
