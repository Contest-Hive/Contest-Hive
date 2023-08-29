import Image from "next/image";
import Link from "next/link";


const makeAnchorTag = (text, url) => {
  return (
    <Link href={url} className="md:hover:text-purple-400 text-blue-300">
      <b>{text}</b>
    </Link>
  );
};

const GithubUrl = "https://github.com/Nusab19/Contest-Hive";

const Description = () => {
  return (
    <section className="body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center
          rounded"
          alt="hero"
          src="/assets/images/profilePhoto.jpg"
          width={100}
          height={100}
        ></Image> */}
        <div className="text-center lg:w-2/3 w-full">
          <header className="title-font sm:text-5xl text-3xl mb-10 font-medium text-white">
            We Build Open-Source
          </header>
          <p className="leading-relaxed mb-8">
            <q className="font-bold">Software Freedom For All</q>
            <br />
            We're not only providing the API for free, but also the source code.
            So that you can make this better by your contribution too!
            <br />
            Feel free to visit the {makeAnchorTag("Github", GithubUrl)}{" "}
            repository.
          </p>

          {/* API Docs and Github Button */}
          <div className="flex justify-center">
            <Link href="#">
              <button className="inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
                API Docs
              </button>
            </Link>
            <Link href={GithubUrl}>
              <button className="ml-4 inline-flex  bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 hover:text-white rounded text-lg">
                Github
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
