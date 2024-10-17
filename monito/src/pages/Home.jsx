import React from "react";
import HeroCard from "../components/HeroCard";
import Cards from "../components/Cards";
import Banner from "../components/Banner";
import PetKnowladge from "../components/PetKnowladge";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <HeroCard />

      <Cards />
      <Banner />

      <Products />
      <PetKnowladge />
    </>
  );
};

export default Home;
