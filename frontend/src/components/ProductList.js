import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../api";
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <Link to={`/product/${product._id}`}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <img src={product.image} alt={product.name} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
