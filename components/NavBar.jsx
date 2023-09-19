"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

// Change these to your own links
const navTitle = "Contest Hive";
const logoUrl = "/favicon.svg";
const blueLink = {
  name: "About",
  url: "/about",
};
const navLinks = {
  Documentation: "/docs",
  Credits: "/credits",
};

// Don't Change this unless you know what you are doing
const classWhenClosed = "hidden w-full md:block md:w-auto";
const classWhenOpen =
  "absolute w-[90%] md:block md:w-auto right-5 top-16 items-center justify-center";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const ref = useRef(null);

  function handleNavbar() {
    setNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    // Close the navbar when clicked outside
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  return (
    <nav>
      <div className="top-0 mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <img
            src={logoUrl}
            width={50}
            height={50}
            className="mr-3 mt-0.5 h-10 w-10"
            alt={`${navTitle} Logo`}
          ></img>
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-100">
            {navTitle}
          </span>
        </Link>

        {/* DropDown Area */}
        <div ref={ref}>
          {/* DropDown Button */}
          <div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 md:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={handleNavbar}
              id="hamBurger"
            >
              <span className="sr-only">Open DropDown Bar</span>
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
              <ul className="mt-4 flex flex-col rounded-lg border border-gray-800 bg-gray-900 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-hidden md:bg-gray-950 md:p-0">
                <li>
                  <Link
                    href={blueLink.url}
                    className="block rounded bg-sky-900 px-4 py-2 text-white md:rounded-b-lg
         md:rounded-t-lg
         md:px-4
         md:py-2 md:text-gray-100 md:hover:bg-slate-800 md:hover:text-gray-100 "
                    aria-current="page"
                  >
                    {blueLink.name}
                  </Link>
                </li>
                {/* From `navLinks` */}
                {Object.keys(navLinks).map((key) => (
                  <li key={key}>
                    <Link
                      href={navLinks[key]}
                      className="block rounded px-4
          py-2 hover:text-white md:hover:bg-slate-800 md:hover:text-white"
                    >
                      {key}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* DropDown Links End */}
          </div>
        </div>
        {/* DropDown Area End */}
      </div>
    </nav>
  );
};

export default NavBar;
