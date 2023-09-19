import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="py-15 container mx-auto mb-20 mt-10 flex w-11/12 flex-col items-center justify-center px-5 text-center tracking-wide md:w-10/12">
        <h1 className="mb-8 text-3xl font-bold text-gray-100 md:text-5xl">
          Credits
        </h1>
        <p className="mb-5 text-lg text-gray-100">
          As this is my first ever project with Next.js and Tailwind CSS, I had
          to take help from a lot of resources. I am listing all the resources
          that I used to build this website.
          <br />
          These great resources helped me a lot to build this website.
          <br />
          <br />
        </p>
        {/* Describe about Flowbite, TailwindCss components and how you used them */}
        <div className="mb-8 flex flex-col text-base">
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
            I used many components from Flowbite. I used the <b>Navbar</b>,{" "}
            <b>Footer</b> and
            <b>SVG icons</b> and so on from Flowbite.
            <br />
            Though I took the components from Flowbite, I had to make them
            responsive with my own logic as I didn't use the <b>flowbite.js</b>
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
            Tailblock is a nice website too. I used the{" "}
            <Link href="/#why-us" className="font-bold text-blue-400">
              <q>Why Contest Hive?</q>
            </Link>{" "}
            from Tailblock.
            <br />
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
