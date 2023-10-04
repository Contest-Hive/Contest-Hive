import Image from "next/image";
import Link from "next/link";

const QUOTE = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="mb-4 block h-5 w-5 text-gray-400"
    viewBox="0 0 975.036 975.036"
  >
    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
  </svg>
);

const UserExperience = () => {
  return (
    <section
      className="body-font mx-auto w-[90%] text-gray-300"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-5 py-24">
        <header className="mb-12 text-center text-4xl font-medium text-white md:text-6xl">
          Testimonials
        </header>
        <div className="-m-4 flex flex-wrap">
          {/* one */}
          <div className="w-full p-4 md:w-1/2" data-aos="fade-up-right">
            <div className="h-full rounded-lg bg-gray-800 bg-opacity-40 p-8">
              {QUOTE}
              <p className="mb-6 leading-relaxed">
                Wow! Contest Hive helped me a lot to boost my productivity in
                competitive programming. Everyone should try this out. Totally
                real review.
              </p>
              <Link href="#" className="inline-flex items-center">
                <Image
                  width={50}
                  height={50}
                  alt="user's profile picture"
                  src="/assets/images/cat 2.jpg"
                  className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
                />
                <span className="flex flex-grow flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Random Guy
                  </span>
                  <span className="text-sm text-gray-400">
                    Product Designer
                  </span>
                </span>
              </Link>
            </div>
          </div>

          {/* Two */}
          <div className="w-full p-4 md:w-1/2" data-aos="fade-up-left">
            <div className="h-full rounded-lg bg-gray-800 bg-opacity-40 p-8">
              {QUOTE}
              <p className="mb-6 leading-relaxed">
                Contest Hive is so straightforward and easy to use. I didn't
                need to sign up to use it. This is my new tool to manage
                contests.
              </p>
              <Link href="#" className="inline-flex items-center">
                <Image
                  width={50}
                  height={50}
                  alt="user's profile picture"
                  src="/assets/images/cat 4.jpg"
                  className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
                />
                <span className="flex flex-grow flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Real User
                  </span>
                  <span className="text-sm text-gray-400">
                    Product Developer
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserExperience;
