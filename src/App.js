// CSS:
import "./App.css";
// React:
import React from "react";
import { Routes, Route } from "react-router-dom";
// PAGES:
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
// COMPONENTS:
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-light-smoke dark:bg-dark-erie text-light-t1 dark:text-dark-t1">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// https://api.escuelajs.co/api/v1/products
