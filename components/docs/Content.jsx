import Link from "next/link";

const Content = () => {
  return (
    <>
      <div id="1" className="container mx-auto my-20 flex flex-wrap px-5 py-6">
        <header className="title-font text-3xl font-bold text-white sm:text-4xl">
          API Documentation
        </header>
        <p className="mt-5 block">
          Contest Hive has a RESTful API that allows you to access upcoming contest information from 7 different competitive programming platforms. The API is free to use and requires no authentication.
        </p>

        <Link
          href="#"
          className="mt-6 flex items-center rounded-xl bg-sky-900 px-3 pb-1 pt-0.5 text-sm  font-semibold text-white ring-1 ring-sky-600 ring-opacity-60 transition duration-200 ease-in-out hover:bg-opacity-50 group"
        >
          Get Started
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="-mr-1 mt-[3px] h-5 w-5 group-hover:ml-1"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            ></path>
          </svg>
        </Link>
      </div>

     

    </>
  );
};

export default Content;
