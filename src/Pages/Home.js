import React from "react";
import NavBar from "../Components/NavBar";
import "../Pages/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <NavBar />
      <div className="Home-content">
        <div className="Home-inside">
          <span className="Heading">
            Welcome to <span className="Home-title">Thrift</span>
          </span>
          <br />
          <br />
          <br />
          <span className="description">
            Welcome to Thrift, the ultimate destination for savvy shoppers
            looking for great deals on a wide range of products, including
            electronics, fashion, jewelry, and much more. We believe that
            shopping should be easy, fun, and affordable, which is why we've
            created an e-commerce platform that is both user-friendly and
            budget-friendly.
            <br />
            <br />
            So why wait? Start browsing our selection today and discover the
            amazing deals waiting for you at Thrift. Shop smart, save big, and
            enjoy the ultimate online shopping experience.
          </span>
        </div>
        <Link to="/Products" className="links">
          <button className="Home-Products">View products</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
