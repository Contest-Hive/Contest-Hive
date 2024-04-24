import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-red-600 text-center text-4xl">
      This is the about page. <Link href="/">Go back</Link>
    </div>
  );
};

export default About;
