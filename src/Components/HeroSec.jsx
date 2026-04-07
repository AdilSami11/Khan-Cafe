import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
const HeroSec = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`hero-main-wrapper  ${theme === "dark" ? "dark" : "light"}`}
    >
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-left-wrapper">
            <h4>Are you hungry ?</h4>
            <h1>Don't wait !</h1>
            <div className="btn">
              <Link to={"/products"}>
                <button>Order now</button>
              </Link>
            </div>
          </div>
          <div className="hero-right-wrapper">
            <div className="img-wrap">
              <img
                src="/delicious-pepperoni-pizza-culinary-delight_632498-24206.avif"
                alt="pizza"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
