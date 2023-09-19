import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
});

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <NavBar />
      <div
        className={`${font.className} py-15 container mx-auto mb-20 mt-10 flex w-11/12 flex-col items-center justify-center px-5 text-center tracking-wide md:w-10/12`}
      >
        <h1 className="mb-8 text-3xl font-bold text-gray-100 md:text-5xl">
          Credits
        </h1>
        <p className="mb-5 text-lg text-gray-100">
          Creating this website with Next.js and Tailwind CSS was a bit like
          trying to assemble a furniture without the instructions - a few
          stumbles and a lot of{" "}
          <q>
            <i>what does this part even do?</i>
          </q>{" "}
          moments.
          <br />
          But hey, even the best chefs use recipes, right? I took help from some
          cool resources to make this project.
          <br />
          <br />
          Here are my secret weapons that made this project possible. 🚀
        </p>
        <div className="mb-14 mt-5 flex flex-col text-base">
          <Link
            href="https://flowbite.com"
            target="_blank"
            className="title-font mb-3 text-2xl font-bold text-teal-400 hover:text-indigo-400"
          >
            <Image
              src="https://flowbite.com/images/logo.svg"
              width={30}
              height={30}
              alt="Flowbite Icon"
              className="mb-1 mr-2 inline w-7"
            />
            Flowbite
          </Link>
          <span>
            I went on a bit of a component shopping🛒 spree at Flowbite,
            grabbing awesome stuff like the <b>Navbar</b>, <b>Footer</b>, and
            some snazzy <b>SVG icons</b>. You could say it was a component heist
            of epic proportions! 💎
            <br />
            <br />
            But here's where it gets interesting. While I borrowed these goodies
            from Flowbite, I had to sprinkle some of my own coding magic to make
            them responsive. I mean, who needs a <b>flowbite.js</b> wizard when
            you've got your own skills? 😎
            <br />
          </span>
        </div>
        {/* tailblock */}
        <div className="flex flex-col text-base">
          <Link
            href="https://tailblocks.cc/"
            target="_blank"
            className="title-font mb-3 text-2xl font-bold text-teal-400 hover:text-indigo-400"
          >
            <Image
              src="https://tailblocks.cc/favicon.png"
              width={30}
              height={30}
              alt="Tailblock Icon"
              className="mb-1 mr-2 inline w-7"
            />
            Tailblock
          </Link>
          <span>
            Tailblock, another gem of a website!
            <br />I snatched the{" "}
            <Link href="/#why-us" className="font-bold text-blue-400">
              <q>Why Contest Hive?</q>
            </Link>{" "}
            section straight from Tailblock. 😉🌟
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
