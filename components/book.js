import React from "react";
import Link from "next/link";

export default function Book({ title, price, url, imgurl }) {
  return (
    <div className="flex w-[280px] 2xl:w-[530px] xl:w-[330px] lg:w-[350px] md:w-[275px] sm:w-[240px] sm:m-4 m-6 flex-col items-center rounded-lg xl:border-gradient-animation lg:border-gradient-animation-lower md:border-gradient-animation-lower sm:border-gradient-animation-lower border-gradient-animation-lower">
      <Link href={url}>
        <img
          src={imgurl.src}
          alt="book preview"
          className="mb-3 2xl:w-[530px] xl:w-[450px] lg:w-[350px] md:w-[275px] 2xl:h-[640px] xl:h-[400px] lg:h-[420px] md:h-[320px] sm:w-[240px] sm:h-[280px] rounded-3xl "
        ></img>
      </Link>
      <div className="flex flex-col h-40 w-1/2 sm:w-auto items-center mt-3 pb-4">
        <span className="2xl:text-4xl xl:text-2xl md:text-xl sm:text-lg text-xl text-center font-Philosopher font-bold text-GhostWhite">
          <Link href={url}>{title}</Link>
        </span>
        <span className="2xl:text-2xl xl:text-xl md:text-xl sm:text-sm text-lg font-Philosopher font-bold text-GhostWhite">
          {price} руб.
        </span>
        <button className="mt-auto">
          <span className="text-2xl md:text-xl sm:text-base font-Philosopher text-GhostWhite hover:font-extrabold">
            <Link href={url}>Купить</Link>
          </span>
        </button>
      </div>
    </div>
  );
}
