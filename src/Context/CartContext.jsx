import { createContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Provider Component:

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // cart add item Logic:
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Cart remove item Logic:
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
