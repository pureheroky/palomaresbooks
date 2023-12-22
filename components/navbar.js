import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex w-full flex-col xl:flex-row items-center bg-Ash p-16">
      <div className="flex flex-row items-center">
        <div className="flex justify-center flex-col">
          <span className="xl:text-7xl text-5xl flex flex-row font-Bebas font-bold text-Azure border-b-Jet border-b-4">
            <Link href="/">palomaresbooks</Link>
          </span>
          <div className="flex flex-row w-full justify-around mt-2 text-Azure font-bold font-Playfair text-lg sm:border-b-Jet sm:border-b-4">
            <span className="cursor-pointer sm:mb-2">
              <Link href={"/contacts"}>Контакты</Link>
            </span>
            <span className="cursor-pointer sm:mb-2">
              <Link href={"/"}>Книги</Link>
            </span>
            <span className="cursor-pointer sm:mb-2">
              <Link href={"/support"}>Поддержка</Link>
            </span>
          </div>
        </div>
      </div>

      <div className="xl:ml-auto ml-0 mt-4 sm:mt-4 ">
        <span className="flex h-full justify-end items-center text-xl xl:text-2xl font-Bebas sm:justify-center">
          All rights reserved © 2023
        </span>
      </div>
    </div>
  );
}
