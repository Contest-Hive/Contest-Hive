import { buttonVariants } from "../components/ui/button";

import { cn } from "@/lib/utils";

import Link from "next/link";

const contactInfo = {
  facebook: "https://fb.me/NusabTaha/",
  twitter: "https://twitter.com/Nusab19/",
  linkedin: "https://linkedin.com/in/NusabTaha/",
  portfolio: "https://nusab19.pages.dev/",
};

const NotFound = () => {
  return (
    <section>
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-(--breakpoint-sm) text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Oh no! We can&apos;t find that page.
          </p>
          <p className="mb-4 text-lg text-muted-foreground">
            If you think this is a mistake, please contact us at{" "}
          </p>
          <span className="mx-auto mb-10 flex justify-center">
            <Link
              href={contactInfo.facebook}
              className="rounded px-1 py-1 transition duration-150 hover:bg-blue-900 hover:text-white"
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
              className="ml-3 rounded px-1 py-1 transition duration-150  hover:bg-blue-600 hover:text-white"
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
            <Link
              href={contactInfo.linkedin}
              className="ml-3 rounded px-1 py-1 transition duration-150 hover:bg-blue-800 hover:text-white"
              title="Linkedin of Nusab Taha"
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="h-7 w-7"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="3" stroke="none"></circle>
              </svg>
            </Link>
          </span>
          <Link
            href="/"
            className={cn(
              "my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium",
              buttonVariants(),
            )}
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
