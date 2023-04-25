import Wrapper from "@/components/Wrapper";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* Left coloumn starts */}
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lf:mx-0">
          Left
        </div>
        {/* Right column starts */}
        <div className="flex-[1] py-3">Right</div>
      </Wrapper>
    </div>
  );
};  

export default ProductDetails;
