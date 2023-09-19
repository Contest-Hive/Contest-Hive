import { Inter } from "next/font/google";

const font = Inter({
  weight: "400",
  subsets: ["latin"],
});

import Link from "next/link";

const GithubUrl = "https://github.com/Nusab19/Contest-Hive";

const Content = () => {
  return (
    <section className="body-font">
      <div className="py-15 container mx-auto mb-20 flex flex-col items-center justify-center px-5 tracking-wide">
        <div className="my-10 w-full text-center lg:w-2/3 ">
          <header className="title-font mb-10 text-3xl font-medium text-white sm:text-5xl">
            We Built Open-Source
          </header>
          <p
            className={`${font.className} mb-8 text-sm leading-relaxed md:text-base`}
          >
            <q className="font-mono text-xl font-bold">
              Software Freedom For All
            </q>
            <span className="mb-2 block"></span>
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
