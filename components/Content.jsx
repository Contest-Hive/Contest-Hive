import Link from "next/link";

const GithubUrl = "https://github.com/Contest-Hive";

const Content = () => {
  return (
    <section
      className="pt-15 container mx-auto mb-20 flex flex-col items-center justify-center px-5"
      data-aos="fade-up"
    >
      <div className="my-10 w-full text-center lg:w-2/3 ">
        <header className="mb-10 text-4xl font-medium text-white md:text-6xl">
          We Built Open-Source
        </header>
        <p className="mb-8 text-base text-gray-300 md:text-lg">
          <q className="mb-2 block font-mono text-xl font-bold text-gray-100 md:text-2xl">
            Software Freedom For All
          </q>
          We believe in the power of open-source. Therefore, this project is
          completely open-source!
          <br />
          Your contribution can make a big difference 🔥
          <br />
          <br />
          <span className="text-gray-100">
            Help us by starring this project in Github.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Content;
