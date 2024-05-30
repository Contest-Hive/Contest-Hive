import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-20 text-center text-4xl font-bold">
      This is the about page.{" "}
      <Link href="/" className="underline-dotted">
        Go back
      </Link>
      <br />
      <p className="text-base my-10">Developing this page with lower priority cuz I&apos;ve got exams! :/</p>
    </div>
  );
};

export default About;
