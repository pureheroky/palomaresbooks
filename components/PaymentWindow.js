import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

export default function PaymentWindow({ title, price, close, bookid }) {
  let downloadHandler = () => {
    console.log(title);
    const filename = `${bookid}.docx`;
    fetch("/api/getbook", {
      method: "post",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        bookname: filename,
        price: price,
        id: bookid,
      }),
    }).then(async (res) => {
      // const blob = await res.blob();
      // const url = window.URL.createObjectURL(blob);
      let response = await res.json();
      console.log(response[0]);

      const a = document.createElement("a");
      a.href = response[0];
      // a.download = `${title}.docx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(response[0]);
    });
  };
  return (
    <div className="relative">
      <div className="fixed inset-0 backdrop-filter backdrop-blur-md z-10">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 bg-Azure border-2 border-Ash -translate-y-1/2 rounded shadow-lg 2xl:w-2/4 2xl:h-3/4 md:w-3/4 md:h-full w-11/12">
          <div className="text-Ash font-Poppins rounded-lg xl:p-4 md:p-2 p-5 md:h-full">
            <div className="flex w-full justify-end xl:p-4 p-1 cursor-pointer md:text-5xl text-2xl">
              <CloseIcon
                className="xl:text-xl md:text-base text-2xl"
                onClick={() => {
                  close("");
                }}
              />
            </div>

            <div className="xl:border-2 md:border-2 border xl:mt-4 xl:mb-4 md:mt-1 md:mb-2 mt-1 mb-1"></div>
            <div className="flex w-full md:flex-col flex-row justify-center text-center items-center">
              <span className="xl:text-3xl md:text-2xl text-base font-Philosopher text-Ash font-light">
                Вы выбрали:&nbsp;
              </span>
              <span className="xl:text-2xl md:text-xl text-base font-Philosopher text-Ash font-light">
                {title} - {price} руб
              </span>
            </div>
            <div className="xl:border-2 md:border-2 border xl:mt-4 xl:mb-4 md:mt-1 md:mb-2 mt-1 mb-1"></div>
            <div className="flex w-full flex-col text-center xl:text-xl text-base md:text-base items-center font-Philosopher text-Ash font-light">
              <span>Инструкция по получению:</span>
              <div className="flex w-full flex-col xl:mt-2 xl:text-xl text-sm mt-2 items-center text-center">
                <span>1. Оплатите товар.</span>
                <span>2. После оплаты вернитесь обратно на сайт.</span>
                <span>
                  3. Ожидайте начала загрузки эллектронной версии книги.
                </span>
              </div>
              <span className="xl:mt-8 md:mt-2 italic mt-2 text-xs text-Ash xl:text-xl md:text-base">
                При возникновении проблем с оплатой/получением книги обращайтесь
                на нашу почту{" "}
                <a href="mailto:igorgol2003@inbox.ru" target="_blank">
                  igorgol2003@inbox.ru
                </a>
              </span>
            </div>
            <div className="2xl:mt-8 md:mt-2 mt-2 mb-1 flex w-full justify-center ">
              <Button
                variant="outlined"
                color="ash"
                style={{ fontSize: "18px" }}
                onClick={() => {
                  downloadHandler();
                }}
              >
                Купить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
