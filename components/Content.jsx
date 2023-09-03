import Image from "next/image";
import Link from "next/link";

const GithubUrl = "https://github.com/Nusab19/Contest-Hive";

const Content = () => {
  return (
    <section className="body-font">
      <div className="py-15 container mx-auto mb-20 flex flex-col items-center justify-center px-5">
        {/* <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center
          rounded"
          alt="hero"
          src="/assets/images/profilePhoto.jpg"
          width={100}
          height={100}
        ></Image> */}
        <div className="w-full text-center lg:w-2/3">
          <header className="title-font mb-10 text-3xl font-medium text-white sm:text-5xl">
            We Build Open-Source
          </header>
          <p className="mb-8 leading-relaxed">
            <q className="font-bold">Software Freedom For All</q>
            <span className="mb-2 block"></span>
            We're not only providing the API for free, but also the source code.
            So that you can make this better by your contribution too!
            <br />
            Feel free to visit the{" "}
            <Link
              href={GithubUrl}
              className="text-blue-300 md:hover:text-purple-400"
              target="_blank"
            >
              <b>Github </b>
            </Link>
            repository.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Content;
