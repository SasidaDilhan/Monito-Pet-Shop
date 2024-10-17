import React from "react";
import HeroCard from "../components/HeroCard";
import Cards from "../components/Cards";
import Banner from "../components/Banner";
import PetKnowladge from "../components/PetKnowladge";

const Home = () => {
  return (
    <>
      <HeroCard />
      
      <Cards />
      <Banner />
      <div className=" ps-3">
        <p className=" text-sm">You already know ?</p>
        <p className=" text-lg font-bold">Useful Pet Knowledge</p>    
      </div>
      <PetKnowladge />
    </>
  );
};

export default Home;
