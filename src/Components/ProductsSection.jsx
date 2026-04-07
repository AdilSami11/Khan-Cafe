import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
const ProductsSection = () => {
  const { theme } = useContext(ThemeContext);
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function PizzasFetching() {
      try {
        const fetchData = await fetch("https://dummyjson.com/recipes");
        const data = await fetchData.json();

        const homePagePizzas = data.recipes.slice(0, 6);
        setPizzas(homePagePizzas);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      } finally {
        setLoading(false);
      }
    }
    PizzasFetching();
  }, []);

  return (
    <div
      className={`products-main-wrapper ${theme === "dark" ? "dark" : "light"}`}
    >
      <div className="container">
        <div className="title">
          <h2>Our Top Picks</h2>
        </div>

        <div className="products-wrapper">
          {loading ? (
            <p>Loading tasty food...</p>
          ) : pizzas.length === 0 ? (
            <p>No Data Found...</p>
          ) : (
            pizzas.map((pizza) => (
              <div key={pizza.id} className="product-card">
                <div className="card-img-wrap">
                  <img src={pizza.image} alt={pizza.name} />
                </div>
                <div className="card-detail-wrap">
                  <h3>{pizza.name}</h3>
                  <span>{pizza.mealType[0]}</span>
                  <div className="prices-section">
                    <h4>⭐ {pizza.rating}</h4>
                    <Link to={"/products"}>
                      <button>Visit Products</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
