"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const LogoUrl =
  "https://raw.githubusercontent.com/Nusab19/Nusab19/main/assets/contest-hive%202-modified%20(1).svg";

const SideBarLinks = {
  Introduction: "#introduction",
  Platforms: {
    "All Platforms": "docs/all",
    AtCoder: "docs/atcoder",
    CodeChef: "docs/codechef",
    Codeforces: "docs/codeforces",
    HackerEarth: "docs/hackerearth",
    HackerRank: "docs/hackerrank",
    LeetCode: "docs/leetcode",
    Toph: "docs/toph",
  },
};

const SideBar = () => {
  // Everything is set to false as default
  // So, mobile users don't see the sidebar when they first visit the page

  // Desktop users will see the sidebar sliding from the left at first
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(false);
  const [classForSidebar, setClassForSidebar] = useState(
    "fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform",
  ); // closed as default

  function handleResize() {
    // Close the sidebar when the screen is less than 768px

    if (window.innerWidth >= 768) {
      setDesktop(true);
      setSidebarOpen(true);
      setClassForSidebar(
        "fixed left-0 top-0 z-40 h-screen w-64 translate-x-0 transition-transform",
      );
    } else {
      setDesktop(false);
      setSidebarOpen(false);
      setClassForSidebar(
        "fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform",
      );
    }
  }
  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    // toggles the sidebar for mobile
    if (sidebarOpen) {
      setClassForSidebar(
        "fixed left-0 top-0 z-40 h-screen w-64 translate-x-0 transition-transform",
      );
    } else {
      setClassForSidebar(
        "fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform",
      );
    }

    // Bind the event listener
    window.addEventListener("resize", handleResize);

    return () => {
      // Unbind the event listener on clean up
      window.removeEventListener("resize", handleResize);
    };
  }, [sidebarOpen]);

  function handleSidebar() {
    setSidebarOpen(true);
  }

  const sidebarRef = useRef(null);
  useEffect(() => {
    // Close the sidebar when clicked outside
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        if (!isDesktop) setSidebarOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, isDesktop]);

  function getClassName() {
    if (isDesktop || sidebarOpen) {
      return "fixed left-0 top-0 z-40 h-screen w-64 translate-x-0 transition-transform";
    }

    return "fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform";
  }
  // End of Sidebar

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  function handleDropdown1() {
    setDropdownOpen1(!dropdownOpen1);
  }

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 md:hidden"
        onClick={handleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        id="logo-sidebar"
        className={classForSidebar}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-900 px-3 py-4">
          <Link href="/" className="mb-5 flex items-center pl-2.5">
            <Image
              src={LogoUrl}
              width={50}
              height={50}
              className="mr-3 h-6 sm:h-7"
              alt="Contest Hive Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
              Contest Hive
            </span>
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href={SideBarLinks["Introduction"]}
                className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-800"
              >
                <svg
                  className="h-5 w-5 text-gray-400 transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Introduction</span>
              </Link>
            </li>
            {/* Drop list */}
            <li>
              <Link href="#endpoints">
                <button
                  type="button"
                  className="group flex w-full items-center rounded-lg p-2 text-base text-white transition duration-75 hover:bg-gray-800"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                  onClick={handleDropdown1}
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap text-left">
                    Platforms
                  </span>
                  <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </Link>
              <ul
                id="dropdown-example"
                className={dropdownOpen1 ? "mt-2 space-y-2" : "hidden"}
              >
                <li>
                  <Link
                    href={SideBarLinks.Platforms["All Platforms"]}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    All Platforms
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.AtCoder}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    AtCoder
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.CodeChef}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    CodeChef
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.Codeforces}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    Codeforces
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.HackerEarth}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    HackerEarth
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.HackerRank}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    HackerRank
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.LeetCode}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    LeetCode
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.Toph}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    Toph
                  </Link>
                </li>
              </ul>
            </li>
            {/* List Items */}
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-800"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Kanban</span>
                <span className="ml-3 inline-flex items-center justify-center rounded-full bg-gray-800 px-2 text-sm font-medium text-gray-300">
                  Pro
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-800"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Inbox</span>
                <span className="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-900 p-3 text-sm font-medium text-blue-300">
                  3
                </span>
              </Link>
            </li>
            {/* <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-800"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-800"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-800"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Sign In</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-800"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Sign Up</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
