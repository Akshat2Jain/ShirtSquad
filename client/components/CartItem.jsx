import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const p = data.attributes;

  return (
    <>
      {console.log(p.thumbnail)}
      <div className="flex py-5 gap-3 md:gap-5 border-b">
        <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
          {/* <img src="p1.png" alt="img" /> */}
          <Image
            src={p.thumbnail.data.attributes.url}
            alt={p.name}
            width={120}
            height={120}
          />
        </div>
        {/* ***************** */}
        <div className="w-full flex flex-col">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Product title */}
            <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
              {p.name}
            </div>
            {/* Product Subtitle */}
            <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
              {p.subtitle}
            </div>
            {/* Product Price */}
            <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
              MRP : &#8377;{pname.price}
            </div>
          </div>
          {/* Product subtitle */}
          <div className="text-md font-medium text-black/[0.5] hidden md:block">
            {p.subtitle}
          </div>
          {/* Size */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
              <div className="flex items-center gap-1">
                <div className="font-semibold">Size</div>
                <select className="hover:text-black">
                  <option value="1">UK6</option>
                  <option value="1">UK6</option>
                  <option value="1">UK6</option>
                  <option value="1">UK6</option>
                  <option value="1">UK6</option>
                  <option value="1">UK6</option>
                </select>
              </div>
              <div className="flex items-center gap-1">
                <div className="font-semibold">Quantity</div>
                <select className="hover:text-black">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option>
                  <option value="1">6</option>
                </select>
              </div>
            </div>
            <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
