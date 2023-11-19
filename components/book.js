import React from "react";
import Link from "next/link";

export default function Book({ title, price, url, imgurl }) {
  return (
    <div className="flex w-[600px] flex-col items-center p-8 rounded-lg border-gradient-animation">
      <Link href={url}>
        <img
          src={imgurl.src}
          alt="book preview"
          className=" w-[500px] h-[600px] rounded-3xl"
        ></img>
      </Link>
      <div className="flex flex-col h-40 items-center mt-3">
        <span className="text-4xl text-center font-Philosopher font-bold text-GhostWhite">
          <Link href={url}>{title}</Link>
        </span>
        <span className="text-2xl font-Philosopher font-bold text-GhostWhite">
          {price} руб
        </span>
        <button className="mt-auto">
          <span className="text-2xl font-Philosopher text-GhostWhite hover:font-extrabold">
            Купить
          </span>
        </button>
      </div>
    </div>
  );
}
