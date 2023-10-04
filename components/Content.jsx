import Link from "next/link";

const GithubUrl = "https://github.com/Contest-Hive";

const Content = () => {
  return (
    <section className="body-font" data-aos="fade-up">
      <div className="py-15 container mx-auto mb-20 flex flex-col items-center justify-center px-5 tracking-wide">
        <div className="my-10 w-full text-center lg:w-2/3 ">
          <header className="mb-10 text-4xl font-medium text-white md:text-6xl">
            We Built Open-Source
          </header>
          <p className="mb-8 text-base leading-relaxed tracking-wide text-gray-300 md:text-lg">
            <q className="mb-2 block font-mono text-xl font-bold text-gray-100 md:text-2xl">
              Software Freedom For All
            </q>
            We believe in the power of open-source. So, we made this project
            completely open-source too.
            <br />
            Check out the repositories of{" "}
            <Link
              href={GithubUrl}
              className="text-blue-500 md:hover:text-purple-400"
              target="_blank"
              title="Github Repository of Contest Hive"
            >
              <b>Contest Hive </b>
            </Link>
            in Github.
            <br />
            Your contribution can make a big difference! 🔥
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
