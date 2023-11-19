import React, { useEffect, useRef, useState } from "react";
import { bookData } from "@/components/bookimages";
import { useRouter } from "next/router";

import PaymentWindow from "@/components/PaymentWindow";
import { Button } from "@mui/material";

export default function Book() {
  const router = useRouter();
  const bookid = router.query.book;
  const [bookPart, setBookPart] = useState([]);
  const [Payment, setPayment] = useState("");

  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [popup, showPopup] = useState(false);
  // const buttonRef = useRef(null);

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    setTooltipPosition({
      top: rect.bottom + window.scrollY - 50,
      left: rect.left + window.scrollX + 250,
    });
    showPopup(true);
  };

  const handleMouseLeave = () => {
    showPopup(false);
  };

  let downloadHandler = (e, title) => {
    const filename = `${bookid}.docx`;
    fetch("/api/getbook", {
      method: "post",
      responseType: "blob",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookname: filename,
      }),
    }).then(async (res) => {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${title}.docx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  };

  useEffect(() => {

    

    const fetchItems = async () => {
      if (bookid != undefined) {
        const filename = `${bookid}part.docx`;
        const response = await fetch(`/api/getbookpart/`, {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ bookname: filename }),
        });
        const data = await response.json();
        setBookPart(data);
      }
    };

    if (bookid > Object.keys(bookData).length || bookid < 1) {
      router.push("/404");
    }

    fetchItems();
  }, [router.isReady]);

  let togglePaymentWindow = (e, visible) => {
    if (visible) {
      setPayment(
        <PaymentWindow
          close={setPayment}
          title={bookData[bookid][0]}
          price={bookData[bookid][1]}
        />
      );
    } else {
      setPayment("");
    }
  };

  return (
    <div className="flex flex-col">
      {bookData[bookid] ? (
        <div className=" flex flex-row p-28 h-full">
          <div className="flex w-[600px] h-full ">
            <img
              className="border-2 border-Jet rounded-lg"
              src={bookData[bookid][4].src}
            ></img>
          </div>
          <div className="ml-24 w-[450px] flex flex-col">
            <span className="text-6xl text-Ash font-Philosopher font-bold">
              {bookData[bookid][0]}
            </span>
            <span className="text-4xl mt-6 text-Ash font-Philosopher font-light">
              {bookData[bookid][1]} руб
            </span>
            <span className="text-xl mt-20 text-Ash font-Philosopher italic font-light">
              {bookData[bookid][2]}
            </span>

            <div className="cursor-default mt-auto flex-col flex">
              <Button color="jet" onClick={(e) => togglePaymentWindow(e, true)}>
                Купить и скачать
              </Button>
              {bookData[bookid][6] == true ? (
                <Button
                  color="jet"
                  onClick={(e) => togglePaymentWindow(e, true)}
                >
                  Купить и скачать аудио версию
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <span>Loading image</span>
      )}
      {bookData[bookid] && bookData[bookid][5] == true ? (
        <div className="w-full border-t-2 flex-col items-center flex p-28">
          <span className=" font-Philosopher text-4xl text-Ash p-4">
            Трейлер к книге
          </span>
          <video
            controls
            muted
            src="/vids/trailer.mp4"
            className="w-1/2"
          ></video>
        </div>
      ) : (
        <div></div>
      )}

      {bookData[bookid] ? <div className="border-b-2"></div> : <div></div>}

      {bookData[bookid] ? (
        <div className=" flex-col items-center flex m-28">
          <div className="flex p-4 text-4xl text-Ash font-Philosopher">
            Демо книги
            <div
              className="cursor-help select-none"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              *
              {popup ? (
                <div
                  className=" absolute bg-Ash text-xl text-Jet p-2 rounded top-full left-1/2 transform -translate-x-1/2 opacity-100 transition-opacity duration-300"
                  style={{
                    top: tooltipPosition.top,
                    left: tooltipPosition.left,
                  }}
                >
                  Представлены первые 50 строчек произведения.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex-col items-start flex border-4 p-8 rounded-lg">
            {bookPart.map((el, id) => {
              return (
                <span className="text-Ash font-Playfair text-xl p-2" key={id}>
                  {el}
                </span>
              );
            })}
          </div>
        </div>
      ) : (
        <span className="text-6xl font-Philosopher text-Ash">Loading...</span>
      )}
      {bookData[bookid] ? <div className="border-b-2"></div> : <div></div>}
      {Payment}
    </div>
  );
}
