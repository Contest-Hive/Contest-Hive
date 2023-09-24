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

// NavBar Class
const navBarClassOpen = "absolute w-[90%] right-0 top-14 mx-6";
const navBarClassClosed = "hidden w-full md:block md:w-auto";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navBarClass, setNavBarClass] = useState(navBarClassClosed);

  const ref = useRef(null);

  function handleNavbar() {
    if (navbarOpen) {
      setNavbarOpen(false);
      setNavBarClass(navBarClassClosed);
    } else {
      setNavbarOpen(true);
      setNavBarClass(navBarClassOpen);
    }
  }

  // useEffect for resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setNavBarClass(navBarClassClosed);
        setNavbarOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Close the navbar when clicked outside
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
        setNavBarClass(navBarClassClosed);
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
          <Image
            src={logoUrl}
            width={50}
            height={50}
            className="mr-3 mt-0.5 h-10 w-10"
            alt={`${navTitle} Logo`}
          ></Image>
          <span className="self-center whitespace-nowrap text-2xl font-bold text-gray-100 transition-all duration-100 hover:text-sky-400">
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
            <div className={navBarClass}>
              <ul className="mt-4 flex flex-col rounded-lg border border-gray-800 bg-gray-900 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-hidden md:bg-transparent md:p-0">
                <li>
                  <Link
                    href={blueLink.url}
                    className="block rounded bg-purple-800 px-4 py-2 text-white
         md:rounded-lg md:text-gray-100 md:hover:bg-opacity-80 md:hover:text-gray-100 "
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
          py-2 hover:text-white md:rounded-lg md:hover:bg-purple-900 md:hover:text-white"
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
