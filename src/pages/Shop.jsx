import React from "react";
import Search from "../components/shop/Search";
import Products from "../components/shop/Products";
import SideBar from "../components/shop/SideBar";

function Shop() {
  return (
    <section
      className="
      grid grid-cols-12 gap-6
      mt-2
      px-4 lg:px-8">
      <div className="col-span-12">
        <Search />
      </div>
      <div className="col-span-12 md:col-span-3">
        <SideBar />
      </div>
      <div className="col-span-12 md:col-span-9">
        <Products />
      </div>
    </section>
  );
}

export default Shop;
