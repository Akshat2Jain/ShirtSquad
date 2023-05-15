import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            {/* Heading and paragraph */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            {/* *********************** */}
            {/* Cart content start */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart items</div>
                {cartItems.map((item) => {
                  <CartItem key={item.id} data={item} />;
                })}

                {/* <CartItem />
                <CartItem /> */}
              </div>
              {/* ********************* */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>
                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      19656
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolor iste, quis sunt atque doloremque velit obcaecati
                    debitis nostrum nisi rem excepturi molestias minima optio
                    eaque, in saepe ducimus! Temporibus, iusto!
                  </div>
                </div>
                {/* Buy Now button */}
                <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                  CheckOut
                </button>
              </div>
            </div>
          </>
        )}

        {/* This is empty screen  */}

        {cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14">
            <img src="/empty-cart.jpg" alt="cart" width={300} height={300} />
            <span className="text-xl font-bold">Your Cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart
              <br />
              Go ahead and explore top categories
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
