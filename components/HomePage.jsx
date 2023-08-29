const HomePage = () => {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-6xl text-5xl font-bold title-font text-white">
            Contest Hive
          </h1>
          <h2 className="mt-3 text-indigo-400 tracking-widest font-medium title-font mb-1">
            Contests' Information at your Fingertips
          </h2>
        </div>

        {/* Add Section to Select Platform */}
        <div className="text-center w-full">
          <header className="title-font sm:text-5xl text-3xl mb-10 font-medium text-white">
            Why Contest Hive?
          </header>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#6b9bd2"
                  >
                    <path d="M377.16,25.55c-53.57.19-99.77,32.3-121.16,78.63-21.38-46.32-67.58-78.44-121.16-78.63C58,25.29-2.39,92.55.07,170.85c5,159.71,155.09,266.36,223.05,306.6a64.52,64.52,0,0,0,65.75,0c68-40.23,218-146.89,223.05-306.6C514.39,92.55,454,25.29,377.16,25.55ZM152.62,256l18,27,21.31,32,21.31-32L240,242.91l52.34,104.68,24-40L347.26,256h120C424.67,358.28,321.38,428.4,275.8,455.39a38.85,38.85,0,0,1-39.72,0C190.62,428.47,87.26,358.33,44.64,256Z" />
                  </svg>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  Reliable
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Contest-Hive is a stable API with 99% Uptime.
                  <br />
                  So, you can use it for your projects without any worries.
                </p>
                {/* <a className="mt-3 text-indigo-400 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-fulltext0-white flex-shrink-0">
                  <svg
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                    stroke="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#6b9bd2CCCCCC"
                      strokeWidth="4.8"
                    >
                      {" "}
                      <path
                        d="M19 19L17.5 17.5"
                        stroke="#6b9bd2"
                        strokeWidth="1.248"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M19 5L17.5 6.5"
                        stroke="#6b9bd2"
                        strokeWidth="1.248"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M5 19L6.5 17.5"
                        stroke="#6b9bd2"
                        strokeWidth="1.248"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M5 5L6.5 6.5"
                        stroke="#6b9bd2"
                        strokeWidth="1.248"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M2 12H4"
                        stroke="#6b9bd2"
                        strokeWidth="1.248"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M19.9998 12L21.9998 12"
                        stroke="#6b9bd2"
                        strokeWidth="1.248"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M12 4.00021L12 2.00021"
                        stroke="#6b9bd2"
                        strokeWidth="1.248"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M10.1214 14.364C8.94978 13.1924 8.94978 11.2929 10.1214 10.1214C11.2929 8.94978 13.1924 8.94978 14.364 10.1214C14.8096 10.567 15.1209 11.4921 15.3355 12.4675C15.6564 13.926 15.8169 14.6553 15.2361 15.2361C14.6553 15.8169 13.926 15.6564 12.4675 15.3355C11.4921 15.1209 10.567 14.8096 10.1214 14.364Z"
                        stroke="#6b9bd2"
                        strokeWidth="1.248"
                      ></path>{" "}
                      <path
                        d="M9 21.5422C4.94289 20.2679 2 16.4776 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 16.4776 19.0571 20.2679 15 21.5422"
                        stroke="#6b9bd2"
                        strokeWidth="1.248"
                        strokeLinecap="round"
                      ></path>{" "}
                    </g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M19 19L17.5 17.5"
                        stroke="#6b9bd2"
                        strokeWidth="2.088"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M19 5L17.5 6.5"
                        stroke="#6b9bd2"
                        strokeWidth="2.088"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M5 19L6.5 17.5"
                        stroke="#6b9bd2"
                        strokeWidth="2.088"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M5 5L6.5 6.5"
                        stroke="#6b9bd2"
                        strokeWidth="2.088"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M2 12H4"
                        stroke="#6b9bd2"
                        strokeWidth="2.088"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M19.9998 12L21.9998 12"
                        stroke="#6b9bd2"
                        strokeWidth="2.088"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M12 4.00021L12 2.00021"
                        stroke="#6b9bd2"
                        strokeWidth="2.088"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M10.1214 14.364C8.94978 13.1924 8.94978 11.2929 10.1214 10.1214C11.2929 8.94978 13.1924 8.94978 14.364 10.1214C14.8096 10.567 15.1209 11.4921 15.3355 12.4675C15.6564 13.926 15.8169 14.6553 15.2361 15.2361C14.6553 15.8169 13.926 15.6564 12.4675 15.3355C11.4921 15.1209 10.567 14.8096 10.1214 14.364Z"
                        stroke="#6b9bd2"
                        strokeWidth="2.088"
                      ></path>{" "}
                      <path
                        d="M9 21.5422C4.94289 20.2679 2 16.4776 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 16.4776 19.0571 20.2679 15 21.5422"
                        stroke="#6b9bd2"
                        strokeWidth="2.088"
                        strokeLinecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  Boundless
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Contest Hive can handle unlimited amount of requests.
                  <br />
                  This became possible because of Vercel and NextJS
                </p>
                {/* Learn More */}
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6b9bd2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="arcs"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  Forever Free
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Contest Hive is intended to be free forever. No hidden costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
