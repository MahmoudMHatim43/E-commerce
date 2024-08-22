import React from "react";
// Components:
import Hero from "../components/home/Hero";
import Promotion from "../components/home/Promotion";
import Categories from "../components/home/Categories";
import Trending from "../components/home/Trending";
import Reviews from "../components/home/Reviews";
import NewsLetter from "../components/home/NewsLetter";

function Home() {
  return (
    <>
      <Hero />
      <Promotion />
      <Categories />
      <Trending />
      <Reviews />
      <NewsLetter />
    </>
  );
}

export default Home;
