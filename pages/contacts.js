import React from "react";

export default function Contacts() {
  return (
    <div className=" min-h-screen flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-col items-center p-4">
        <span className="text-3xl font-bold text-Ash font-Philosopher">
          Электронная почта:
        </span>
        <a
          href="mailto:igorgol2003@inbox.ru"
          target="_blank"
          className="text-2xl text-Ash font-Philosopher"
        >
          igorgol2003@inbox.ru
        </a>
      </div>
      <div className="flex flex-col items-center p-4">
        <span className="text-3xl font-bold text-Ash font-Philosopher">
          Социальные сети:
        </span>
        <div className="flex flex-col items-center text-2xl text-Ash font-Philosopher">
          <a>Facebook</a>
          <a>Facebook</a>
          <a>Facebook</a>
        </div>
      </div>
      <div className="mt-32">
        <span className="text-2xl text-Ash font-Philosopher italic">
          Если Вы хотите оставить отзыв о книге, пожалуйста, пишите только на нашу{" "}
          <a href="mailto:igorgol2003@inbox.ru" className="font-bold">
            электронную почту
          </a>.
        </span>
      </div>
    </div>
  );
}
