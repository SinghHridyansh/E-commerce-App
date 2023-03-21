import "./App.css";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Users from "./Pages/User";
import Products from "./Pages/Products";
import ProductDetail from "./Components/ProductDetail";
import SingleProduct from "./Components/SingleProduct";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "@mui/icons-material";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route index element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
        <Route path="/user" element={<Users />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
