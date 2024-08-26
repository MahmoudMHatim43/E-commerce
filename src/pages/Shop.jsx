import React from "react";
import Search from "../components/shop/Search";
import Products from "../components/shop/Products";
import SideBar from "../components/shop/SideBar";
function Shop() {
  return (
    <section
      className="
      grid grid-cols-12 grid-rows-[auto_auto_1fr] sm:grid-rows-[auto_1fr] gap-4
      min-h-[100svh]
      mt-[10svh]
    "
    >
      <Search />
      <SideBar />
      <Products />
    </section>
  );
}

export default Shop;
