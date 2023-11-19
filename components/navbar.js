import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex w-full bg-Ash p-16">
      <div className="flex flex-row items-center">
        <div className="flex justify-center flex-col">
          <span className="text-7xl flex flex-row font-Bebas font-bold text-Azure border-b-Jet border-b-4">
            <Link href="/">palomaresbooks</Link>
          </span>
          <div className="flex flex-row w-full justify-around mt-2 text-Azure font-bold font-Playfair text-lg">
            <span className=" cursor-pointer ">
              <Link href={"/contacts"}>Контакты</Link>
            </span>
            <span className=" cursor-pointer ">
              <Link href={"/"}>Книги</Link>
            </span>
            <span className=" cursor-pointer ">
              <Link href={"/support"}>Поддержка</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full ml-auto">
        <span className="flex h-full justify-end items-center text-2xl font-Bebas">
          All rights reserved © 2023
        </span>
      </div>
    </div>
  );
}
