import Wrapper from "@/components/Wrapper";
import React from "react";
import ProductCrousel from "@/components/ProductCrousel";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProduct from "@/components/RelatedProduct";
import { fetchDataFromApi } from "@/utils/api";

const ProductDetails = (product, products) => {
  // console.log(product);
  const p = product?.product?.data?.[0]?.attributes?.image?.data;
  const pname=product?.product?.data?.[0]?.attributes;
  console.log(pname);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left coloumn starts */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductCrousel images={p}/>
          </div>
          {/* Right column starts */}
          <div className="flex-[1] py-3">
            {/* Product title */}
            <div className="text-[34px] font-semibold">{pname.name}</div>
            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">
              {pname.subtitle}
            </div>
            {/* Product Price */}

            <div className="text-lg font-semibold">{pname.price}</div>

            {/*  tagline */}
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
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  Uk6
                </div>
              </div>
              {/* Sizes end */}
              {/* warning on choosing any size */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* Buy buttion */}
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-meduium transition-transform active:scale-95 mb-3 hover:opacity-75 ">
                Add to Cart
              </button>
              {/* Add to wishlist button */}
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button>
              {/* Product Desctription */}
              <div>
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="text-md mb-5">
                  {pname.description}
                </div>
                <div className="text-md mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  dignissimos animi sint accusantium similique itaque,
                  laudantium maxime numquam excepturi necessitatibus obcaecati,
                  labore quidem illo ducimus praesentium, repellat quasi
                  eligendi fugiat.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <RelatedProduct /> */}
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
      params: {
          slug: p.attributes.slug,
      },
  }));

  return {
      paths,
      fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
