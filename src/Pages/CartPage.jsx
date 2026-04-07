import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { ThemeContext } from "../Context/ThemeContext";
const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`cart-main-page-wrapper ${theme === "dark" ? "dark" : "light"}`}
    >
      <div className="container">
        <div className="cart-title">
          <h1>Cart Items </h1>
        </div>      
        <div className="main-cart-item-wrapper">
          {cartItems.length === 0 ? (
            <p
              style={
                theme === "dark"
                  ? { color: "#fff", fontSize: "2rem" }
                  : { color: "#000000", fontSize: "2rem" }
              }
            >
              No Cart Item....
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-card">
                <div className="cart-card-img-wrap">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-card-detail-wrap">
                  <h3>{item.name}</h3>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove Item
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
