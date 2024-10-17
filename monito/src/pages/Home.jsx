import React from "react";
import HeroCard from "../components/HeroCard";
import Cards from "../components/Cards";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <HeroCard />
      <div className="">
        <p className=" text-sm">Whats new?</p>
        <p className=" text-lg">Take A Look At Some Of Our Pets</p>
      </div>
      <Cards />
      <Banner />
    </>
  );
};

export default Home;
