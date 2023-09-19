import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="py-15 container mx-auto mb-20 mt-10 flex w-11/12 flex-col items-center justify-center px-5 text-center tracking-wide md:w-10/12">
        <h1 className="mb-8 text-3xl font-bold text-gray-100 md:text-5xl">
          About Contest Hive
        </h1>
        <p className="text-lg text-gray-100">
          Contest Hive was created to make your life as a competitive programmer
          easier.
          <br />
          Our goal? To let you focus on your code and not get lost in the jungle
          of upcoming contests.
          <br />
          <br />
          I'm just like you, a programmer who thought searching for contests
          across different platforms was as messy as a spaghetti eating
          competition. So, I whipped up this website to help myself and fellow
          code warriors stay on top of all the action.
          <br />
          <br />
          But wait, there's more! I added API support, so if you're dreaming of
          making Discord Bots, Telegram Bots, or any other cool application, the
          API is your secret sauce to get all the upcoming contest info.
          <br />
          You can find more info in the{" "}
          <Link
            href="/docs"
            target="_blank"
            className="font-semibold text-blue-400"
          >
            API Documentation
          </Link>
          .
          <br />
          <br />
          Now, let's talk about simplicity. I kept things as easy as pie. 🥧
          <br />
          Sure, this was my first project with Next.js and Tailwind CSS, and it
          was like learning to ride a unicycle with roller skates at first. But
          hey, I'm thrilled with the result, and I promise it's as smooth as
          butter.
          <br />
          <br />
          Got some genius suggestions or hilarious feedback to share? Don't hold
          back! I'm all ears...
          <br />
          Drop me a line, and let's make Contest Hive even more epic! 🚀
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
