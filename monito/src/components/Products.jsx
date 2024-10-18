import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productsAPI";
import { RiArrowRightSLine } from "react-icons/ri";
import GiftIcon from "../assets/GiftIcon.png";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const productData = await getProducts();
        setProducts(productData);
      } catch (error) {
        console.log("fetching pets data failed: " + error);
      }
    };

    getProductsData();
  }, []);
  return (
    <>
      <div className=" hidden md:flex justify-between md:mb-10">
        <div className=" ps-3">
          <p className=" text-[16px] font-bold">
            Hard to choose right products for your pets?
          </p>
          <p className=" text-[24px] text-custom-blue font-extrabold">Our Products</p>
        </div>
        <button className="  hidden p-3 border border-solid border-black  w-[251px] rounded-[57px] md:flex justify-center items-center gap-4 text-sm">
          View more
          <RiArrowRightSLine size={24} />
        </button>
      </div>
      <div className="hidden gap-4 md:grid md:grid-cols-4 ">
        {products?.map((product) => (
          <div key={product.id} className=" bg-white rounded-[12px] ">
            <div className=" p-4 space-y-2">
              <img
                className=" rounded-[10px] md:w-full"
                src={product.image}
                alt={product.description}
              />
              <p className=" font-extrabold text-[16px]">{product.name}</p>
              <div className=" text-gray-500 flex gap-3">
                <p>Product: {product.product}</p>

                <li>
                  Size:<span className=" font-bold">{product.size}</span>
                </li>
              </div>
              <p className=" font-extrabold text-[16px]">{product.price}</p>
              <div className=" bg-custom-gift p-2 rounded-lg flex gap-3">
                <img src={GiftIcon} />
                <li className=" font-bold">{product.description}</li>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" p-5">
        <button className=" hidden md:hidden p-5 border border-solid border-black  w-full rounded-[57px] md:flex justify-center items-center gap-4 text-sm">
          View more
          <RiArrowRightSLine size={24} />
        </button>
      </div>
    </>
  );
};

export default Products;
