import Link from "next/link";

const GithubUrl = "https://github.com/Contest-Hive/Contest-Hive";

const Home = () => {
  return (
    <div className="container mx-auto flex flex-wrap px-5 py-24">
      <div className="flex w-full flex-col text-center">
        <h1 className="title-font text-4xl font-bold text-white md:text-7xl">
          Contest Hive is All You Need
        </h1>
        <h2 className="mb-1 mt-3 text-sm font-medium tracking-widest text-indigo-400 md:text-lg">
          Never Miss a Contest Again
        </h2>

        {/* API Docs and Github Button */}
        <div className="mt-16 flex justify-center">
          <Link href="/docs">
            <button
              className="inline-flex rounded border-0 bg-purple-800 px-6 py-2 text-lg text-white hover:bg-indigo-800 focus:outline-none"
              data-aos="fade-up-right"
              data-aos-once="true"
              data-aos-duration="100"
            >
              API Docs
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 22 22"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-0.5 mt-1 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </span>
            </button>
          </Link>
          <Link href={GithubUrl} target="_blank">
            <button
              className="ml-4 inline-flex  rounded border-0 bg-gray-800 px-8 py-2 text-lg hover:bg-indigo-800 hover:text-white focus:outline-none"
              data-aos="fade-up-left"
              data-aos-once="true"
              data-aos-duration="100"
            >
              Github
              <span>
                <svg
                  viewBox="0 0 16 16"
                  className="ml-1 mt-1 h-5 w-5"
                  fill="#ffffff"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
              </span>
            </button>
          </Link>
          <div className="md:top-30 md:h-5/11 absolute top-36 -z-10 mx-auto h-1/5 w-3/5 max-w-2xl rounded-lg bg-gradient-to-r from-indigo-800 to-fuchsia-800 opacity-80 blur-[100px] md:w-4/6 md:opacity-80 md:blur-[130px] lg:w-2/5 xl:w-2/6"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
