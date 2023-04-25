import Head from "next/head";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <>
      <main>
        <HeroBanner/>
        <Wrapper>
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div>Heading</div>
            <div>Paragraph</div>
          </div>
        </Wrapper>
        
      </main>
    </>
  );
}
