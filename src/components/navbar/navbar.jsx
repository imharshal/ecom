import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import person from "../../assets/person-icon.svg";
import search from "../../assets/search-icon.svg";
import cart from "../../assets/cart-icon.svg";
import heart from "../../assets/heart-icon.svg";
import { CartContext } from "../../CartContext";
const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav id="navbar">
      <div className="left-nav">
        <h3 className="nav-title">AccioJob</h3>
        <div className="collapse navbar-collapse">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Pages</Link>
            </li>
          </ul>
        </div>
      </div>
      <ul className="right-nav">
        <li>
          <Link to="#" className="nav-item align-center">
            <img
              className="nav-icon"
              src={person}
              alt="signup"
              width="12px"
            ></img>
            <span className="text-primary">Login / Register</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-item align-center">
            <img className="nav-icon" src={search} alt="search-icon"></img>
          </Link>
        </li>
        <li>
          <span className="nav-item align-center">
            <img className="nav-icon" src={cart} alt="search-icon"></img>
            {cartItems || 0}
          </span>
        </li>
        <li>
          <span className="nav-item align-center">
            <img className="nav-icon" src={heart} alt="search-icon"></img>
            {cartItems || 0}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
