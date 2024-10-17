import React from "react";
import HeroCard from "../components/HeroCard";
import Cards from "../components/Cards";
import Banner from "../components/Banner";
import PetKnowladge from "../components/PetKnowladge";
import Products from "../components/Products";
import Sellers from "../components/Sellers";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroCard />
      <div className=" p-20">
        <Cards />
        <Banner />
        <Products />
        <Sellers />
        <PetKnowladge />
      </div>
    </>
  );
};

export default Home;
