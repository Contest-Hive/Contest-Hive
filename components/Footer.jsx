import Link from "next/link";

const contactInfo = {
  facebook: "https://fb.me/NusabTaha/",
  twitter: "https://twitter.com/Nusab19/",
  // instagram: "https://instagram.com/Nusab19", // not an insta Guy. ~,~
  linkedin: "https://linkedin.com/in/NusabTaha/",
  portfolio: "https://nusab19.pages.dev/",
};

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <Link
          title="Github Repository of Contest Hive"
          className="title-font flex items-center justify-center font-medium text-white md:justify-start"
          href="https://github.com/Nusab19/Contest-Hive"
          target="_blank"
        >
          <span className="ml-3 text-2xl">Contest Hive</span>
        </Link>
        <p className="mt-4 text-sm sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:pl-4">
          <b>© 2023 Contest Hive</b>
          <span className="ml-3">—</span>
          <Link
            title="Portfolio of Nusab Taha"
            href={contactInfo.portfolio}
            className="text-md ml-3 font-mono text-base font-semibold text-rose-500 hover:text-emerald-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            NusabTaha
            <svg
              className="mb-1 ml-2 inline-block h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              id="flag-icons-bd"
              viewBox="0 0 640 480"
            >
              <path fill="#006a4e" d="M0 0h640v480H0z" />
              <circle cx="280" cy="240" r="160" fill="#f42a41" />
            </svg>
          </Link>
        </p>
        {/* SVG Icons for Contact */}
        {/* Facebook */}
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <Link
            href={contactInfo.facebook}
            className="rounded px-1 py-1 transition duration-300 hover:bg-blue-900 "
            title="Facebook Profile of Nusab Taha"
            target="_blank"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-7 w-7"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link>

          {/* Twitter */}
          <Link
            href={contactInfo.twitter}
            className="ml-3 rounded px-1 py-1 transition duration-300  hover:bg-blue-600"
            title="Twitter of Nusab Taha"
            target="_blank"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-7 w-7"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>

          {/* Instagram */}
          {/* I'm not an insta Guy. ~,~ */}
          {/* 
          <Link className="ml-3 ">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-7 h-7 hover:bg-gradient-to-r from-pink-600 from-35% via-purple-700 via-21% to-orange-600 to-44% rounded"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link> */}

          {/* Linkedin */}
          <Link
            href={contactInfo.linkedin}
            className="ml-3 rounded px-1 py-1 transition duration-300 hover:bg-blue-800 "
            title="Linkedin of Nusab Taha"
            target="_blank"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="h-7 w-7 transition  duration-300 hover:-rotate-[360deg]"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="3" stroke="none"></circle>
            </svg>
          </Link>
          {/* --------- */}
          {/* Add Discord, CodeForces and Toph Svg with the profile links */}
          {/* --------- */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
