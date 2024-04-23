import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="text-4xl bg-red-600 text-center">
      This is the about page. <Link href="/">Go back</Link>
    </div>
  );
};

export default About;
