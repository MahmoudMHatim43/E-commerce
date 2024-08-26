import React from "react";
import Products from "../components/shop/Products";
import SideBar from "../components/shop/SideBar";
function Shop() {
  return (
    <section
      className="shop-page 
    flex flex-col md:flex-row
    w-[100svw] min-h-[100svh]
    mt-[7.5svh]"
    >
      <SideBar />
      <Products />
    </section>
  );
}

export default Shop;
