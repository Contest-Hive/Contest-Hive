"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const classWhenClosed = "hidden w-full md:block md:w-auto";
const classWhenOpen =
  "absolute sm:hidden w-[90%] md:block md:w-auto right-5 top-16 items-center justify-center";

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
  Documentation: "#",
  Legal: "#",
};

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
      <div className="top-0 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src={logoUrl}
            width={30}
            height={50}
            className="h-10 mr-3"
            alt={`${navTitle} Logo`}
          ></Image>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            {navTitle}
          </span>
        </Link>

        {/* DropDown Button */}
        <div onMouseLeave={closeAll}>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleNavbar}
            id="hamBurger"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:bg-gray-900 md:border-hidden border border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 bg-gray-800">
              <li>
                <Link
                  href={blueLink.url}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
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
                    className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparentmd:hover:text-blue-700 md:p-0 hover:text-white"
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
