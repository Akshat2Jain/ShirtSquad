import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getDiscountedPrecentage } from "@/utils/helper";

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link
      href={`products/${p.slug}`}
      className="transaform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      {/* <img className='w-full' src="/p1.png" alt='shoe image'></img> */}
      <Image
        width={500}
        height={500}
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold"> &#8377;{p.price}</p>
          
          {p.original_price && (
            <>
              <p className="mr-2  font-semibold line-through">&#8377;{p.original_price}</p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPrecentage(p.original_price,p.price)}% Off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
