import React, { useEffect, useState } from "react";
import api from "../api";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-item">
          <h2 className="product-name">Name: {product.name}</h2>
          <p className="product-description">
            Description: {product.description}
          </p>
          <p className="product-price">Price: ${product.price}</p>
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
