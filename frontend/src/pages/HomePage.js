import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the E-Commerce Platform</h1>
      <Link to="/add-product">
        <button>Add a New Product</button>
      </Link>
    </div>
  );
}

export default HomePage;
