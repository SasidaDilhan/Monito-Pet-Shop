import React, { useEffect, useState } from "react";
import Banner1 from "../assets/CartBanner.png";
import Banner2 from "../assets/CartBanner2.png";
import { CgPlayButtonO } from "react-icons/cg";
import NavBar from "./NavBar";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { CiFilter } from "react-icons/ci";
import { getMorePets } from "../api/morePets";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Cart = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPetData = async () => {
      try {
        const petData = await getMorePets();
        setPets(petData);
      } catch (error) {
        console.log("fetching pets data failed: " + error);
      }
    };

    getPetData();
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-30 ">
        <NavBar />
      </div>

      <div className="relative lg:hidden block md:block  p-5">
        <img className="w-full mt-20" src={Banner1} alt="Banner" />

        <div className="absolute inset-10 md:inset-20 flex flex-col space-y-5 top-28">
          <p className="text-black text-[46px] md:text-[60px] font-extrabold">
            One More Friend
          </p>
          <p className="text-black text-[18px] md:text-[24px] font-bold">
            Thousand More Fun!
          </p>
          <p className="text-black text-[12px] md:text-[14px] ">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex gap-3 md:gap-5">
            <button className="p-2 md:p-3 w-[163px] md:w-[161px] border border-solid border-black rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
              View Intro
              <CgPlayButtonO size={24} />
            </button>
            <button className="border border-solid text-white bg-custom-blue border-black  md:w-[161px] w-[163px] rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
              Explore Now
            </button>
          </div>
        </div>
        <div className=" flex justify-between items-center mt-10">
          <Select
            label=""
            placeholder="Sort By:"
            labelPlacement="outside"
            className="max-w-[172px] "
            color=""
            disableSelectorIconRotation
          >
            <SelectItem>Popular</SelectItem>
          </Select>
          <div>
            <CiFilter size={24} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4  ">
        {pets?.map((pet) => (
          <Link
            to="/one-pet"
            key={pet.id}
            className=" bg-white rounded-[12px] hover:scale-105 duration-300 hover:cursor-pointer"
          >
            <div className=" p-4 ">
              <img
                className=" rounded-[10px] md:w-full"
                src={pet.image}
                alt={pet.breed}
              />
              <div className=" space-y-3">
                <p className=" font-bold text-sm">
                  {pet.id} - {pet.breed}
                </p>
                <p>
                  Gender : <span>{pet.gender}</span>
                </p>
                <p>
                  Age : <span>{pet.age}</span>
                </p>
                <p className=" font-bold text-[16px]">Price : {pet.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
