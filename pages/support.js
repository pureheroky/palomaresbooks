import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function Support() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const [isReady, setReady] = useState(false);

  const [inputName, setName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputText, setText] = useState("");

  let checkValues = () => {
    if (inputName != "" && inputEmail != "" && inputText != "") {
      setReady(true);
    }
  };

  const sendRequest = async () => {
    console.log(inputText, inputEmail);
    await fetch("/api/sendfeedbackrequest/", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text: inputText, usermail: inputEmail }),
    });
  };

  return (
    <div className=" min-h-screen flex flex-col ">
      <span className="sm:p-16 p-6 text-Ash text-4xl font-Philosopher w-full text-center">
        Пожалуйста, заполните форму для того чтобы связаться с нами.
      </span>
      <div className="flex min-h-screen justify-center items-center">
        <div className="flex flex-col sm:w-1/2 border-black">
          <div
            className={`m-4 text-Ash font-Philosopher text-2xl transform origin-bottom transition-transform duration-300`}
          >
            <input
              id="name"
              type="text"
              placeholder="Ваше имя"
              required
              className="pt-6 pb-2 outline-none w-full text-center bg-Azure"
              onChange={(e) => {
                setName(e.target.value);
                checkValues();
              }}
              onMouseEnter={() => {
                setIsHovered1(true);
                setIsHovered2(false);
                setIsHovered3(false);
              }}
              onMouseLeave={() => {
                setIsHovered1(false);
              }}
            />
            <div
              className={`border-b-4 transform origin-bottom transition-transform duration-300 ${
                isHovered1 ? "scale-x-100" : "scale-x-0"
              }`}
            ></div>
          </div>
          <div className="m-4 text-Ash font-Philosopher text-2xl transition duration-300 ease-in-out">
            <input
              type="text"
              id="email"
              placeholder="Ваша почта"
              required
              className="pt-6 pb-2 outline-none w-full text-center bg-Azure"
              onChange={(e) => {
                setEmail(e.target.value);
                checkValues();
              }}
              onMouseEnter={() => {
                setIsHovered1(false);
                setIsHovered2(true);
                setIsHovered3(false);
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
          <div className="m-4 text-Ash font-Philosopher text-xl h-64 transition duration-300 ease-in-out">
            <textarea
              id="text"
              type="text"
              placeholder="Опишите вашу проблему/вопрос"
              required
              className="pt-6 pb-2 outline-none w-full resize-none h-full bg-Azure"
              onChange={(e) => {
                setText(e.target.value);
                checkValues();
              }}
              onMouseEnter={() => {
                setIsHovered1(false);
                setIsHovered2(false);
                setIsHovered3(true);
              }}
              onMouseLeave={() => {
                setIsHovered3(false);
              }}
            />
            <div
              className={`border-b-4 transform origin-bottom transition-transform duration-300 ${
                isHovered3 ? "scale-x-100" : "scale-x-0"
              }`}
            ></div>
          </div>
          <div className="flex justify-center m-4">
            <Button
              id="sendBtn"
              variant="outlined"
              color="ash"
              onClick={async () => {
                if (isReady) {
                  await sendRequest();
                }
              }}
            >
              Отправить
            </Button>
          </div>
          <div className="flex justify-center m-4">
            <span className="italic font-Philosopher text-xl text-Ash text-center">
              Перед отправкой убедитесь в том, что вы указали все{" "}
              <span className="font-bold text-center">необходимые данные.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
