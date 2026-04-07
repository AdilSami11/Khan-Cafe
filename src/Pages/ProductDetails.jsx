import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const [product, setProduct] = useState(null);
  const [loading, setLaoding] = useState(true);
  useEffect(() => {
    async function fetchingProduct() {
      try {
        const fetching = await fetch(`https://dummyjson.com/recipes/${id}`);
        console.log(fetching);
        const data = await fetching.json();
        setProduct(data);
        setLaoding(false);
      } catch (error) {
        console.error(error);
        setLaoding(true);
      }
    }
    fetchingProduct();
  }, [id]);

  if (loading)
    return (
      <h1
        style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "500" }}
      >
        Loading .....
      </h1>
    );
  return (
    <div
      className={`product-detail-main-page ${theme === "dark" ? "dark" : "light"}`}
    >
      <div className="back-navigation-wrap">
        <BiArrowBack
          size={35}
          onClick={() => {
            navigate(-1);
          }}
          className="back-navi-icon"
        />
      </div>
      <div className="container">
        <div className="product-details-wrapper">
          <div className="product-detail-img">
            <div className="detail-img-wrap">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <span>Difficulty: {product.difficulty}</span>
            <span>Cuisine: {product.cuisine}</span>
            <span>caloriesPerServing: {product.caloriesPerServing}</span>
            <span>Rating 🌟 : {product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
