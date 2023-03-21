import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import ProductDetail from "../Components/ProductDetail";
import "../Pages/Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [proddata, setprodData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getcategory();
    // getproducts();
  }, []);

  const getcategory = async () => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories`);
    const data = await response.json();
    // console.log(data);
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?offset=0&limit=20`
    );
    const dataprod = await response.json();
    // console.log(data);
    setprodData(dataprod);
    console.log(dataprod);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };
  let filteredproducts;
  if (filter === "") {
    filteredproducts = proddata;
  } else {
    filteredproducts = proddata.filter((prod) => prod.category.name === filter);
    console.log(filteredproducts);
  }

  return (
    <div className="main">
      <NavBar />
      <div className="products-main">
        <div className="products-container">
          <div className="category">
            {data.map((element, i) => (
              // <button
              //   key={i}
              //   value={data[i].category}
              //   onClick={handleFilterChange}
              // >
              //   {data[i].name}
              // </button>
              <label>
                <input
                  type="radio"
                  name="category"
                  value={data[i].name}
                  checked={filter === `${data[i].name}`}
                  onChange={handleFilterChange}
                />
                {data[i].name}
              </label>
            ))}
          </div>
          <div className="items">
            {/* {data.map((element, i) => (
              <ProductDetail />
            ))} */}
            <ProductDetail details={filteredproducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
