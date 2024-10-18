import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "@nextui-org/react"; // Ensure you have this installed
import NavBar from "./NavBar";
import Banner1 from "../assets/CartBanner.png";
import { CgPlayButtonO } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import { getMorePets } from "../api/morePets";

const Test = () => {
  const [pets, setPets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch pets based on the current page
  const fetchPets = async (page) => {
    try {
      const petData = await getMorePets(page, 3); // Fetch 3 pets per page
      if (petData) {
        setPets(petData.pets); // Assuming the API returns a `pets` array
        setTotalPages(petData.totalPages); // Assuming the API returns total pages
      }
    } catch (error) {
      console.error("Error fetching pets: ", error);
    }
  };

  useEffect(() => {
    fetchPets(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-30">
        <NavBar />
      </div>

      <div className="relative p-5">
        <img className="w-full mt-20" src={Banner1} alt="Banner" />
        <div className="absolute inset-10 md:inset-20 flex flex-col space-y-5 top-28">
          <p className="text-black text-[46px] md:text-[60px] font-extrabold">One More Friend</p>
          <p className="text-black text-[18px] md:text-[24px] font-bold">Thousand More Fun!</p>
          <p className="text-black text-[12px] md:text-[14px] ">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className="flex gap-3 md:gap-5">
            <button className="p-2 md:p-3 w-[163px] md:w-[161px] border border-solid border-black rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
              View Intro
              <CgPlayButtonO size={24} />
            </button>
            <button className="border border-solid text-white bg-custom-blue border-black md:w-[161px] w-[163px] rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
              Explore Now
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <select className="max-w-[172px] border border-solid border-black">
            <option>Popular</option>
          </select>
          <div>
            <CiFilter size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4">
        {pets?.map((pet) => (
          <Link to="/cart" key={pet.id} className="bg-white rounded-[12px] hover:scale-105 duration-300 hover:cursor-pointer">
            <div className="p-4">
              <img className="rounded-[10px] md:w-full" src={pet.image} alt={pet.breed} />
              <div className="space-y-3">
                <p className="font-bold text-sm">{pet.id} - {pet.breed}</p>
                <p>Gender: <span>{pet.gender}</span></p>
                <p>Age: <span>{pet.age}</span></p>
                <p className="font-bold text-[16px]">Price: {pet.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Component */}
      <div className="mt-4 flex justify-center">
        <Pagination
          total={totalPages} // Total number of pages
          initialPage={1} // Start at page 1
          page={currentPage} // Current page
          onChange={handlePageChange} // Handle page change
          showControls // Show next/previous buttons
        />
      </div>
    </>
  );
};

export default Test;
