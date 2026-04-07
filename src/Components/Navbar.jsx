import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { GiFullPizza, GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState } from "react";
import CartContext from "../Context/CartContext";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { theme, setTheme } = useContext(ThemeContext);

  // menu-open-close state:
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`navbar-wrapper ${theme === "dark" ? "dark" : "light"}`}>
      <div className="logo-wrapper">
        <div className="logo">
          <Link
            to="/"
            className="a"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <GiFullPizza size={50} color={"orange"} className="pizza-icon" />
            <h2>KhanCafe</h2>
          </Link>
        </div>
      </div>
      <div className={`links-wrapper ${isMenuOpen ? "active" : ""}`}>
        <Link
          to={"/"}
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          to={"/products"}
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Products
        </Link>
        <div className="btn-wrapper">
          <button
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <h4>{cartItems.length}</h4>
            <Link to={"/Cart"}>
              <FaOpencart size={25} color="white" />
            </Link>
          </button>
        </div>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌑" : "🌙"}
        </button>
      </div>
      <GiHamburgerMenu
        size={25}
        color="orange"
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
};

export default Navbar;
