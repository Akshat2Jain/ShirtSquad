import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const index = () => {
  return (
    <>
      <div className="min-h-[650px] flex items-center">
        <Wrapper>
          <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
            <div className="text-2xl font-bold">Contact the Developer</div>
            <div className="text-lg font-bold mt-2">Profile Links 👇</div>
            <div className="text-base mt-5">
              <ul>
                <Link href="https://github.com/Akshat2Jain" target="_blank">
                  <li>GitHub</li>
                </Link>
                <Link href="https://twitter.com/Easyakshat" target="_blank">
                  <li>Twitter</li>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/akshat-jain-991571209/"
                  target="_blank"
                >
                  <li>Linkedin</li>
                </Link>
                <Link href="mailto:jainakshat423@gmail.com" target="_blank">
                  <li>Gmail</li>
                </Link>
              </ul>
            </div>

            <Link href="/" className="font-bold mt-5">
              Continue Shopping
            </Link>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default index;
