import React, { useEffect, useRef, useState } from "react";
import { bookData } from "@/components/bookimages";
import { useRouter } from "next/router";

import PaymentWindow from "@/components/PaymentWindow";
import { Button } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

export default function Book() {
  const router = useRouter();
  const bookid = router.query.book;

  const [bookPart, setBookPart] = useState([]);
  const [Payment, setPayment] = useState("");

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [inputText, setText] = useState("");
  const [inputGmail, setGmail] = useState("");

  const [gradeValue, setGradeValue] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState(0);
  const [list, setList] = useState(
    Array(5).fill(<StarOutlineIcon fontSize="large" />)
  );

  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [popup, showPopup] = useState(false);

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

  const setGradeValues = (value) => {
    let newList = [];
    for (let i = 0; i < 5; i++) {
      if (i < value) {
        newList.push(<StarIcon fontSize="large" />);
      } else {
        newList.push(<StarOutlineIcon fontSize="large" />);
      }
    }
    setList(newList);
  };

  const sendGrade = async () => {
    console.log(inputText, inputGmail);
    const response = await fetch("/api/sendgrade/", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text: inputText, usermail: inputGmail }),
    });
  };

  useEffect(() => {
    setGradeValue(gradeValue);
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
      console.log(bookData[bookid][0]);
      setPayment(
        <PaymentWindow
          close={setPayment}
          title={bookData[bookid][0]}
          price={bookData[bookid][1]}
          bookid={bookid}
        />
      );
    } else {
      setPayment("");
    }
  };

  return (
    <div className="flex flex-col">
      {bookData[bookid] ? (
        <div className=" flex flex-col md:flex-row border-b-2 sm:p-28 p-6 h-full justify-center items-center md:items-stretch">
          <div className="flex md:w-[600px] w-[400px] h-full">
            <img
              className="border-2 border-Jet rounded-lg w-[400px] xl:w-auto"
              src={bookData[bookid][4].src}
            ></img>
          </div>
          <div className="md:ml-24 md:w-[450px] flex flex-col text-center md:text-start mt-6 sm:mt-0">
            <span className="text-3xl md:text-4xl xl:text-6xl text-Ash font-Philosopher font-bold">
              {bookData[bookid][0]}
            </span>
            <span className="text-xl md:text-3xl xl:text-4xl mt-6 text-Ash font-Philosopher font-light">
              {bookData[bookid][1]} руб.
            </span>
            <span className="text-base xl:text-xl mt-4 md:mt-20 text-Ash font-Philosopher italic font-light">
              {bookData[bookid][2]}
            </span>

            <div className="w-full sm:w-auto cursor-default md:mt-auto mt-10 flex-col flex">
              <Button color="ash" onClick={(e) => togglePaymentWindow(e, true)}>
                Купить и скачать
              </Button>
              {bookData[bookid][6] == true ? (
                <Button
                  color="ash"
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
        <div className="w-full flex-col items-center flex sm:p-28 p-6 mt-12 mb-12 sm:m-0">
          <span className=" font-Philosopher text-2xl md:text-4xl text-Ash sm:p-8 pb-6">
            Трейлер к книге:
          </span>
          <video
            controls
            muted
            src="/vids/trailer.mp4"
            className="md:w-1/2 mb-4 sm:mb-0 shadow-[0_0px_10px_2px_rgba(250,250,250,0.2)]"
          ></video>
        </div>
      ) : (
        <div></div>
      )}

      {bookData[bookid] ? <div className="border-b-2"></div> : <div></div>}

      {bookData[bookid] ? (
        <div className=" flex-col items-center flex md:m-28 m-6">
          <div className="flex p-8 text-2xl xl:text-4xl text-Ash font-Philosopher">
            Демо книги
            <div
              className="cursor-help select-none"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              *
              {popup ? (
                <div
                  className="fixed sm:absolute bg-Ash text-base md:text-xl text-Jet p-2 rounded top-full left-6 md:left-1/2 transform md:-translate-x-1/2 sm:-translate-x-36 -translate-x-48 opacity-100 transition-opacity duration-300"
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

          <div className="flex-col items-start flex border-4 sm:p-8 p-2 rounded-lg shadow-[0_0px_10px_4px_rgba(250,250,250,0.2)]">
            {bookPart.map((el, id) => {
              return (
                <span
                  className="text-Ash font-Playfair text-base md:text-xl p-2"
                  key={id}
                >
                  {el}
                </span>
              );
            })}
          </div>

          <div className="border-2 w-full mt-8 mb-8 sm:border-0 sm:w-auto sm:mt-0 sm:mb-0"></div>

          <div className="flex flex-col items-center sm:p-12 text-Ash font-Philosopher sm:text-3xl text-2xl">
            <span className="sm:p-2 text-center">
              Вам понравился показанный отрывок?
            </span>
            <span className="p-2 text-center">Пожалуйста, оцените его</span>

            <div className="p-2 flex flex-row">
              {list.map((el, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onMouseEnter={() => setGradeValues(index + 1)}
                  onMouseLeave={() => setGradeValues(selectedGrade)}
                  onClick={() => {
                    setGradeValues(index + 1);
                    setSelectedGrade(index + 1);
                  }}
                >
                  {el}
                </div>
              ))}
            </div>
            <div
              className={`m-4 text-Ash font-Philosopher w-full text-2xl transform origin-bottom transition-transform duration-300`}
            >
              <input
                id="name"
                type="text"
                placeholder="Ваша почта"
                required
                className="pt-6 pb-2 outline-none w-full text-start bg-Azure"
                onChange={(e) => {
                  setGmail(e.target.value);
                }}
                onMouseEnter={() => {
                  setIsHovered(false);
                  setIsHovered2(true);
                }}
                onMouseLeave={() => {
                  setIsHovered2(false);
                }}
              />
              <div
                className={`border-b-4 transform origin-bottom transition-transform duration-300 ${
                  isHovered2 ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
            <div className="m-4 text-Ash font-Philosopher text-xl w-full h-64 transition duration-300 ease-in-out">
              <textarea
                id="text"
                type="text"
                placeholder="Ваш отзыв"
                required
                className="pt-6 pb-2 outline-none resize-none h-full bg-Azure w-full"
                onChange={(e) => {
                  setText(e.target.value);
                }}
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              />
              <div
                className={`border-b-4 transform origin-bottom transition-transform duration-300 ${
                  isHovered ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
            <div className="flex justify-center m-4">
              <Button
                variant="outlined"
                color="ash"
                onClick={async () => {
                  let el = document.getElementById("gradeSent");
                  el.style.opacity = "1";
                  el.style.cursor = "text";
                  if (selectedGrade && inputText == "" && inputGmail == "") {
                    el.textContent =
                      "Заполните все данные чтобы отправить отзыв.";
                  } else {
                    el.textContent = "Спасибо за Ваш отзыв!";
                  }

                  await sendGrade();
                }}
              >
                Отправить
              </Button>
            </div>
            <span
              id="gradeSent"
              className="opacity-0 cursor-default text-Ash font-Philosopher text-2xl italic text-center"
            >
              text
            </span>
          </div>
        </div>
      ) : (
        <span className="text-6xl font-Philosopher text-Ash">Loading...</span>
      )}

      {/* {bookData[bookid] ? <div className="border-b-2"></div> : <div></div>} */}
      {Payment}
    </div>
  );
}
