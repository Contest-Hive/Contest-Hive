import Link from "next/link";
import Image from "next/image";

const Credits = () => {
  return (
    <div className="py-20 text-center text-4xl font-bold">
      This is the credits page.{" "}
      <Link href="/" className="underline-dotted">
        Go back
      </Link>
      <br />
      <p className="text-base my-10">Developing this page with lower priority.</p>
    </div>
  );
};

export default Credits;
