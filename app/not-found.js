"use client";
import "./globals.css";

import React, { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    let body = document.body.style;
    body.width = "100%";
    body.height = "100%";
    body.margin = "0";
    body.background = "rgb(10 9 12)";
    body.display = "flex";
    body.alignItems = "center";
    body.justifyContent = "center";
  });
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <span
        style={{
          color: "rgb(240 237 238)",
          fontFamily: "Philosopher",
        }}
      >
        Страница была не найдена
      </span>
      <span
        style={{
          color: "rgb(240 237 238)",
          fontFamily: "Philosopher",
        }}
      >
        {" "}
        |
      </span>
      <div
        style={{
          color: "rgb(240 237 238)",
          fontFamily: "Philosopher",
          fontWeight: "bold"
        }}
      >
        <Link href="/">Вернуться на главную</Link>
      </div>
    </div>
  );
}
