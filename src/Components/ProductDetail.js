import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Components/ProductDetail.css";

const ProductDetail = ({ details }) => {
  return (
    <div className="ProductDetail-main">
      {details.map((detail) => (
        <Link to="/SingleProduct">
          <div key={detail.id} className="ProductDetail-card">
            <img src={detail.images[0]} className="thumbnail" />
            <p>{detail.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductDetail;
