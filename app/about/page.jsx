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
          <b>Contest Hive</b> was created to help competitive programmers to let
          them focus on code and not to keep track of all the upcoming contests.
          {" "}
          As a programmer myself, searching for contests on different platforms
          was really messy. So I created this website to help myself and others
          to keep track of all the upcoming contests.
          <br />
          <br />
          Besides creating the website, I added API support so that others who
          want to make Discord Bots, Telegram Bots or any other application can
          use the API to get the upcoming contests information. You can find
          more information in the{" "}
          <Link href="/docs" className="font-bold text-blue-500">
            API Documentation
          </Link>
          .
          <br />
          <br />I tried my best to make the website as simple as possible.
          <br />
          As this is my first ever project with Next.js and Tailwind CSS, I had
          a bit of a hard time building the website. But I am happy with the
          result.
          <br />
          <br />
          <b>
            If you have any suggestions or feedback, please let me know. I will
            be more than happy to hear from you.
          </b>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
