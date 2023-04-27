import Wrapper from "@/components/Wrapper";
import React from "react";
import ProductCrousel from "@/components/ProductCrousel";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left coloumn starts */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductCrousel />
          </div>
          {/* Right column starts */}
          <div className="flex-[1] py-3">
            {/* Product title */}
            <div className="text-[34px] font-semibold mb-20 leading-tight">
              Jordan Retro 6 G
            </div>
            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;'s Golf Shoes
            </div>
            {/* Product Price */}
            <div className="text-lg font-semibold">MRP : 19655.69</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`{Also includes all applicable duties}`}
            </div>
            {/* Product Range */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* Size start */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk6
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
