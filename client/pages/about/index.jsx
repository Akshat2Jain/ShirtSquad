import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const about = () => {
  return (
    <>
      <div className="min-h-[650px] flex items-center">
        <Wrapper>
          <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
            <div className="text-2xl font-bold">About the Developer</div>
            <div className="text-lg font-bold mt-2">
              Hi, My Name is Akshat Jain
            </div>
            <div className="text-base mt-5">
              I Am A Frontend Developer Having The Experience Of 2+ years And
              Worked On Over 30+ Projects.I Want To Be A Developer Who Can
              Contribute To The Community/Open-Source Projects And Teach People
              About Development.
            </div>

            <Link href="/contact">
              <div className="underline">Contact Me</div>
            </Link>

            <Link href="/" className="font-bold mt-5">
              Continue Shopping
            </Link>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default about;
