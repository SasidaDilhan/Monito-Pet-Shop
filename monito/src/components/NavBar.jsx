import React from "react";
import { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import LogoName from "../assets/Frame.png";
import Flag from "../assets/Frame 45.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="w-full absolute z-30 bg-transparent  mx-auto flex justify-between items-center p-4 md:flex md:justify-start ">
      {/* left side */}
      <div className="flex items-center ">
        <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
          <AiOutlineMenu size={30} />
        </div>
      </div>
      {/* search bar */}
      <div className=" md:hidden ">
        <img src={LogoName} />
      </div>
      <div className=" w-full  md:flex md:justify-between md:items-center md:px-20 hidden font-bold">
        <img src={LogoName} />
        <div>Home</div>
        <div>Category</div>
        <div>About</div>
        <div>Contact</div>

        <div className="relative flex items-center ">
          <AiOutlineSearch
            className="absolute left-3 text-gray-400 "
            size={20}
          />
          <input
            type="text"
            className="pl-10 p-2 border border-gray-300 rounded-[46px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>
        <button className=" bg-custom-blue text-white px-6 p-2 rounded-[57px] ">
          Join the community
        </button>

        <div className=" flex gap-2 items-center ">
          <img src={Flag} />
          <p className=" text-[16px]">VIND</p>
          <MdOutlineKeyboardArrowDown size={24}/>
        </div>
      </div>
      <FaSearch className=" md:hidden" size={30} />

      {/* Mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 z-10 h-screen w-full fixed top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? "bg-white h-screen fixed top-0 left-0 z-10 duration-600 w-[300px]"
            : "bg-white h-screen fixed top-0 left-[-100%] z-10 duration-300 w-[300px]"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={20}
          className="absolute right-4 top-4 cursor-pointer"
        />

        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex py-4 text-xl">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="flex py-4 text-xl">
              <MdFavorite size={25} className="mr-4" /> Favorite
            </li>
            <li className="flex py-4 text-xl">
              <FaWallet size={25} className="mr-4" /> Walet
            </li>
            <li className="flex py-4 text-xl">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="flex py-4 text-xl">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="flex py-4 text-xl">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="flex py-4 text-xl">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
