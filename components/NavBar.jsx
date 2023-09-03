"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

// Change these to your own links
const navTitle = "Contest Hive";
// const logoUrl = "/assets/icons/apple-touch-icon.png";
const logoUrl =
  "https://raw.githubusercontent.com/Nusab19/Nusab19/main/assets/contest-hive%202-modified%20(1).svg";
const blueLink = {
  name: "About",
  url: "/about",
};
const navLinks = {
  Documentation: "/docs",
  Credits: "/credits",
};

// Don't Change
const classWhenClosed = "hidden w-full md:block md:w-auto";
const classWhenOpen =
  "absolute sm:hidden w-[90%] md:block md:w-auto right-5 top-16 items-center justify-center";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleNavbar() {
    setNavbarOpen(!navbarOpen);
  }
  function closeAll() {
    if (navbarOpen) handleNavbar();
  }

  return (
    <nav className="bg-gray-900">
      <div className="top-0 mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image
            src={logoUrl}
            width={50}
            height={50}
            style={{ width: "50px", height: "auto" }}
            className="mr-3 h-10"
            alt={`${navTitle} Logo`}
          ></Image>
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            {navTitle}
          </span>
        </Link>

        {/* DropDown Button */}
        <div onMouseLeave={closeAll}>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleNavbar}
            id="hamBurger"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* DropDown Links */}
          <div className={navbarOpen ? classWhenOpen : classWhenClosed}>
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-hidden md:bg-gray-900 md:p-0">
              <li>
                <Link
                  href={blueLink.url}
                  className="block rounded bg-sky-700 px-4 py-2 text-white 
                  transition 
                  duration-500 md:rounded-b-lg
                  md:rounded-t-lg
                  md:px-4
                  md:py-2 md:text-gray-100 md:hover:bg-indigo-700 md:hover:text-gray-100 "
                  aria-current="page"
                >
                  {blueLink.name}
                </Link>
              </li>
              {/* From navLinks */}
              {Object.keys(navLinks).map((key) => (
                <li key={key}>
                  <Link
                    href={navLinks[key]}
                    className="block rounded px-4
                    py-2 transition
                    duration-500
                    hover:text-white md:hover:bg-indigo-700 md:hover:text-white"
                  >
                    {key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*  */}
      </div>
    </nav>
  );
};
