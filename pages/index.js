import React, { useState } from "react";
import Book from "@/components/book";
import { imageList } from "@/components/bookimages";

export default function Index() {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [popup, showPopup] = useState(false);

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    setTooltipPosition({
      top: rect.bottom + window.scrollY - 50,
      left: rect.left + window.scrollX + 230,
    });
    showPopup(true);
  };

  const handleMouseLeave = () => {
    showPopup(false);
  };

  return (
    <div className="flex min-h-screen flex-col ">
      <span className="text-Ash h-full w-full text-3xl italic font-Philosopher text-center p-5">
        Книги продаются только в электронной версии
        <span
          className="cursor-help select-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          *
          {popup ? (
            <div
              className="absolute bg-Ash text-xl text-Jet p-2 rounded top-full left-1/2 transform -translate-x-1/2 opacity-100 transition-opacity duration-300"
              style={{
                top: tooltipPosition.top,
                left: tooltipPosition.left,
              }}
            >
              В будущем откроются и физические версии книг
            </div>
          ) : (
            ""
          )}
        </span>
      </span>

      <div className="flex w-full justify-around pt-16 pb-16">
        <Book
          title={"Ваша Раша"}
          url={"/books/book1"}
          price={200}
          imgurl={imageList[0]}
        />
        <Book
          title={"По банановым республикам без охраны"}
          url={"/books/book2"}
          price={350}
          imgurl={imageList[1]}
        />
        <Book
          title={"Банные хроники"}
          url={"/books/book3"}
          price={500}
          imgurl={imageList[2]}
        />
      </div>
    </div>
  );
}
