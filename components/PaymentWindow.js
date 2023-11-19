import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";


export default function PaymentWindow({ title, price, close }) {
  return (
    <div className="relative">
      <div className="fixed inset-0 backdrop-filter backdrop-blur-md z-10">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 bg-Azure border-2 border-Ash -translate-y-1/2 rounded shadow-lg w-2/4 h-3/4 ">
          <div className="text-Ash font-Poppins rounded-lg p-7 h-full">
            <div className="flex w-full justify-end p-4 cursor-pointer text-5xl">
              <CloseIcon
                className="text-xl"
                onClick={() => {
                  close("");
                }}
              />
            </div>
            
            <div className="border-2 mt-4 mb-4"></div>
            <div className="flex w-full flex-col items-center">
              <span className="text-3xl font-Philosopher text-Ash font-light">
                Вы выбрали:
              </span>
              <span className="text-2xl font-Philosopher text-Ash font-light">
                {title} - {price} руб
              </span>
            </div>
            <div className="border-2 mt-4 mb-4"></div>
            <div className="flex w-full flex-col text-center text-xl items-center font-Philosopher text-Ash font-light">
              <span>Инструкция по получению:</span>
              <div className="flex w-full flex-col mt-2 items-center text-center">
                <span>1. Оплатите товар.</span>
                <span>2. После оплаты вернитесь обратно на сайт.</span>
                <span>
                  3. Ожидайте начала загрузки эллектронной версии книги.
                </span>
              </div>
              <span className="mt-8 italic text-Ash text-xl">
                При возникновении проблем с оплатой/получением книги обращайтесь
                на нашу почту{" "}
                <a href="mailto:igorgol2003@inbox.ru" target="_blank">
                  igorgol2003@inbox.ru
                </a>
              </span>
            </div>
            <div className="mt-28 flex w-full justify-center ">
              <Button
                variant="outlined"
                color="jet"
                style={{ fontSize: "26px" }}
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
