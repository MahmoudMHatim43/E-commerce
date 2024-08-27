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
    <div
      className="
    grid grid-cols-12 grid-rows-[auto_1fr_auto] gap-x-4
    text-light-t1 dark:text-dark-t1
    bg-light-main dark:bg-dark-main
    "
    >
      <header className="col-span-12">
        <Navbar />
      </header>
      <main className="col-span-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <footer className="col-span-12 bg-light-second dark:bg-dark-second">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
