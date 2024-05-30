import Link from "next/link";

const Credits = () => {
  return (
    <div className="py-20 text-center text-4xl font-bold">
      This is the credits page.{" "}
      <Link href="/" className="underline-dotted">
        Go back
      </Link>
      <br />
      <p className="my-10 text-base">
        Developing this page with lower priority cuz I&apos;ve got exams! :/
      </p>
    </div>
  );
};

export default Credits;
