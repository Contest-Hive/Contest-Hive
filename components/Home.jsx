import Link from "next/link";

const GithubUrl = "https://github.com/Nusab19/Contest-Hive";

const Home = () => {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-6xl text-5xl font-bold title-font text-white">
          Contest Hive
        </h1>
        <h2 className="mt-3 text-indigo-400 tracking-widest font-medium title-font mb-1">
          Contests' Information at your Fingertips
        </h2>

        {/* API Docs and Github Button */}
        <div className="flex justify-center mt-16">
          <Link href="#" target="_blank">
            <button className="inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
              API Docs
            </button>
          </Link>
          <Link href={GithubUrl} target="_blank">
            <button className="ml-4 inline-flex  bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 hover:text-white rounded text-lg">
              Github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
