import React from "react";
import gitlogo from "../public/images/gitlogo.png";
import Image from "next/image";

function DesignedBy() {
  return (
    <div className="z-10 flex justify-center items-center bg-black-blue-dark 2xl:mt-6 xl:mt-6 border-t-2">
      <div className="flex flex-col font-Poppins items-center m-6 xl:m-4 text-lg text-honeydew">
        <span>Created and designed by</span>
        <span className="font-Lora">pureheroky</span>
        <hr className="border-honeydew w-full mt-1 mb-1"></hr>
        <span className="">
          <a href="https://0xpure.com">0xpure.com</a>
        </span>
        <div className="pt-1">
          <a href="https://github.com/pureheroky">
            <Image src={gitlogo} className="w-6" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DesignedBy;
