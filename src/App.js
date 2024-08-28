import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();

  return (
    <div className="grid grid-cols-12 grid-rows-[auto_1fr_auto] gap-x-4 text-light-t1 dark:text-dark-t1 bg-light-main dark:bg-dark-main">
      <ScrollToTop />
      <header className="col-span-12">
        <Navbar />
      </header>
      <main className="col-span-12">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/login"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}>
                  <Login />
                </motion.div>
              }
            />
            <Route
              path="/shop"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}>
                  <Shop />
                </motion.div>
              }
            />
            <Route
              path="/products/:productId"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}>
                  <ProductDetails />
                </motion.div>
              }
            />
            <Route
              path="/cart"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}>
                  <Cart />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="col-span-12 bg-light-second dark:bg-dark-second">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
