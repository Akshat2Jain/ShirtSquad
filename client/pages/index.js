import Head from "next/head";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "@/utils/api";
import { BsSearch } from "react-icons/bs";
export default function Home({ products }) {
  const [filterData, setfilterData] = useState("");
  // console.log(filterData);
  // console.log(products);

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  // const fetchProducts = async () => {
  //   const { data } = await fetchDataFromApi("/api/products");
  //   setData(data);
  //   console.log(data)
  // };
  // console.log(products.data.[0].attributes.name)

  return (
    <>
      <main>
        <HeroBanner />
        <Wrapper>
          {/* Heading and caption section starts */}
          {/* <h1>{products?.data?.[0]?.attributes?.name}</h1> */}
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
              Dashing Products
            </div>
            <div className="text-md md:text-xl pb-3">
              A lightweight Niko ZoomX midsole is combined with increased stack
              heights to help provide cushioning
            </div>
            <div
              style={{
                border: "1px  #000",
                display: "inline-block",
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
            >
              <button
                style={{
                  marginLeft: "0.5rem",
                  marginTop: "10px",
                  fontSize: "1.2rem",
                  paddingRight: "0.5rem",
                }}
              >
                <BsSearch />
              </button>
              <input
                type="text"
                style={{
                  border: "1px  #000",
                  display: "inline-block",

                  borderWidth: "2px",
                  height: "3rem",
                  width: "10rem",
                }}
                placeholder="Search Products"
                onChange={(e) => {
                  setfilterData(e.target.value);
                }}
              />
            </div>
          </div>
          {/* Heading and caption section ends */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-6">
            {products?.data
              ?.filter((product) => {
                if (filterData === "") {
                  return product;
                } else if (
                  product?.attributes?.name
                    .toLowerCase()
                    .includes(filterData.toLowerCase())
                ) {
                  return product;
                }
              })
              .map((product) => (
                <ProductCard key={product?.id} data={product} />
              ))}
            {/* {products?.data?.map((product) => (
              <ProductCard key={product?.id} data={product} />
            ))} */}
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
        </Wrapper>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}
