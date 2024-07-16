"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./header.module.css";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[60px]",
        "bg-gray-800",
        "w-full",
        "p-4",
        "left-0",
        "gap-10",
        "flex-col",
      ];
    } else {
      menuClasses = ["hidden", "md:flex"];
    }
    return menuClasses.join(" ");
  }

  return (
    <nav className="gb-gray-800 text-black p-4 sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className={style["a"]}>
          NGUYEN HOAI SON
        </a>
        <div className={getMenuClasses()}>
          <Link href="/" className="mx-2 hover:text-gray-100">
            Home
          </Link>
          <Link href="/about" className="mx-2 hover:text-gray-100">
            About
          </Link>
          <Link href="/contact" className="mx-2 hover:text-gray-100">
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
