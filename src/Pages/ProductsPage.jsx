import { useState, useEffect, useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
function ProductsPage() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    async function PizzasFetching() {
      try {
        const fetchData = await fetch("https://dummyjson.com/recipes");
        const data = await fetchData.json();
        setPizzas(data.recipes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
        setLoading(false);
      }
    }
    PizzasFetching();
  }, []);
  return (
    <div
      className={` products-main-page ${theme === "dark" ? "dark" : "light"}`}
    >
      <div className="container">
        <div className="product-title">
          <h1>Our Pizzas</h1>
        </div>
        <div className="products-page-wrapper">
          {loading ? (
            <p
              style={{
                color: "#000000",
                fontSize: "2rem",
                textAlign: "center",
              }}
            >
              Loading...
            </p>
          ) : (
            pizzas.map((pizza) => (
              <div key={pizza.id} className="product-page-card">
                <div className="product-card-img-wrap">
                  <img src={pizza.image} alt={pizza.name} />
                </div>
                <div className="product-card-detail-wrap">
                  <h3>{pizza.name}</h3>
                  <div className="product-tags-wrap">
                    <span>{pizza.tags[0]}</span>
                    <span>{pizza.tags[1]}</span>
                  </div>
                  <div className="add-btn">
                    <button onClick={() => addToCart(pizza)}>
                      Add to Cart
                    </button>
                    <Link to={`/ProductDetail/${pizza.id}`}>
                      <button>View</button>
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
}

export default ProductsPage;
