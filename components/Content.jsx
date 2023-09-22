import Link from "next/link";

const GithubUrl = "https://github.com/Nusab19/Contest-Hive";

const Content = () => {
  return (
    <section className="body-font">
      <div className="py-15 container mx-auto mb-20 flex flex-col items-center justify-center px-5 tracking-wide">
        <div className="my-10 w-full text-center lg:w-2/3 ">
          <header className="mb-10 text-4xl font-medium text-white md:text-6xl">
            We Built Open-Source
          </header>
          <p className="mb-8 text-base leading-relaxed tracking-wide text-gray-300 md:text-lg">
            <q className="mb-2 block font-mono text-xl font-bold text-gray-100 md:text-2xl">
              Software Freedom For All
            </q>
            We believe in the power of open-source. So, we made this website
            open-source too.
            <br />
            If you want to make this project better, you can contribute in our{" "}
            <Link
              href={GithubUrl}
              className="text-blue-500 md:hover:text-purple-400"
              target="_blank"
              title="Github Repository of Contest Hive"
            >
              <b>Github </b>
            </Link>
            repository.
            <br />
            Your ideas can make a big difference!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
