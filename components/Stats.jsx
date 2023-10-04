import { use } from "react";
import { simplifyNumber } from "@/components/helpers/KontestsHelper";

async function getData() {
  const res = await fetch("https:/contest-hive.vercel.app/api/others/stats", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return data;
}

const Stats = () => {
  const data = use(getData());

  return (
    <section data-aos="fade-up" data-aos-duration="300">
      <div className="mx-auto mt-14 max-w-screen-xl px-4 py-8 text-center">
        <h2 className="mb-7 text-4xl font-medium text-white md:text-6xl">
          People Love Us
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-300">
          Here are some realtime traffic stats
          <br />
          <span className="text-xs text-gray-500 md:text-sm">
            Updates Every 30 Seconds
          </span>
        </p>
      </div>

      <div className="mx-auto mb-0 max-w-screen-md px-4 py-8 text-center">
        <dl className="mx-auto grid max-w-screen-lg gap-5 text-white sm:grid-cols-3">
          {/* 1 */}
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-bold md:text-4xl">
              <span className="toolText select-none">
                {simplifyNumber(data.past24page)}+
              </span>
              <span className="tooltip absolute mx-auto ml-5 hidden select-none rounded-lg bg-slate-800 px-2 pb-[7px] pt-[5px] text-center text-2xl font-medium text-gray-200 opacity-0 transition-opacity duration-200">
                <svg
                  className="absolute -ml-[18px] mt-[10px] h-4 w-4 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                >
                  <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                </svg>
                <span className="font-mono">{data.past24page}</span>
              </span>
            </dt>
            <dd className="mr-3 select-none font-light text-gray-400">
              Visits Today
            </dd>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-bold md:text-4xl">
              <span className="toolText select-none">
                {simplifyNumber(data.api)}+
              </span>

              <span className="tooltip absolute mx-auto ml-5 hidden select-none rounded-lg bg-slate-800 px-2 pb-[7px] pt-[5px] text-center text-2xl font-medium text-gray-200 opacity-0 transition-opacity duration-200">
                <svg
                  className="absolute -ml-[18px] mt-[10px] h-4 w-4 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                >
                  <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                </svg>
                <span className="font-mono">{data.api}</span>
              </span>
            </dt>
            <dd className="mr-3 select-none font-light text-gray-400">
              API calls served
            </dd>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-bold md:text-4xl">
              <span className="toolText select-none">
                {simplifyNumber(data.total)}+
              </span>

              <span className="tooltip absolute mx-auto ml-5 hidden select-none rounded-lg bg-slate-800 px-2 pb-[7px] pt-[5px] text-center text-2xl font-medium text-gray-200 opacity-0 transition-opacity duration-200">
                <svg
                  className="absolute -ml-[18px] mt-[10px] h-4 w-4 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                >
                  <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                </svg>
                <span className="font-mono">{data.total}</span>
              </span>
            </dt>
            <dd className="mr-3 select-none font-light text-gray-400">
              Total Visits
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Stats;
