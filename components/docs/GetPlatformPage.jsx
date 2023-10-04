"use client";
import { useEffect } from "react";
import Link from "next/link";
import Prism from "prismjs";

const pascalNames = {
  all: "All",
  atcoder: "Atcoder",
  codechef: "CodeChef",
  codeforces: "Codeforces",
  "codeforces-gym": "Codeforces GYM",
  hackerearth: "HackerEarth",
  hackerrank: "HackerRank",
  leetcode: "LeetCode",
  toph: "Toph",
};

const GetPlatformPage = ({
  platformName,
  codeExamples,
  exampleResponse,
  properties,
}) => {
  // const codeExamples = getCodeExamples(platformName);
  // const exampleResponse = GetExampleResponse(platformName);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <div id="#" className="container mx-auto my-6 mt-12 px-5">
        <header className="title-font text-3xl font-bold text-white sm:text-4xl">
          {pascalNames[platformName]}
        </header>
        <p className="mt-5 text-gray-300">
          As mentioned in{" "}
          <Link href="/docs/" className="font-semibold text-red-400">
            the docs
          </Link>{" "}
          before, the format of the request is the same.
        </p>
      </div>

      {/* Request Format */}
      <div className="container mx-auto my-1 px-5 py-6" id="request-format">
        <Link
          href="#request-format"
          className="title-font text-2xl font-bold sm:text-3xl"
        >
          Request Format
        </Link>
        <p className="mt-5 text-gray-300">
          Make a <b>GET</b> request to{" "}
          <Link
            href={`/api/${platformName}`}
            className="font-mono text-red-400"
          >
            /api/{platformName}
          </Link>
        </p>
      </div>
      {/* Response */}
      <div className="container mx-auto my-1 px-5 py-6">
        <Link
          href="#request-format"
          className="title-font text-2xl font-bold sm:text-3xl"
        >
          Response
        </Link>
        <p className="mt-5 text-gray-300">
          The response is a JSON object with the following properties:
        </p>

        <div className="mt-5 flex flex-col">
          <div className="w-full overflow-x-auto rounded-lg">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-gray-800 text-xs uppercase text-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Property
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="py-3 pl-6 pr-80">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property, index) => (
                  <tr
                    className="border-b border-gray-800 border-opacity-70 bg-gray-900"
                    key={index}
                  >
                    <td className="px-6 py-4 font-mono text-gray-200">
                      {property.name}
                    </td>
                    <td className="px-6 py-4 font-medium">{property.type}</td>
                    <td className="px-6 py-4">{property.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10">
            <p className="title-font mb-5 text-2xl font-bold text-gray-300">
              Example response:
            </p>
            <div className="overflow-x-auto rounded-lg py-2">
              <pre className="rounded-lg text-sm text-gray-300">
                <button
                  className="absolute right-14 rounded-md bg-slate-700 px-2 py-1 text-base hover:bg-opacity-70 hover:ring-2 hover:ring-slate-800"
                  onClick={copyCode2Clipboard}
                >
                  Copy
                </button>
                <code className="language-js">
                  {JSON.stringify(exampleResponse, null, 2)}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Sample code example starts here */}

      <div className="container mx-auto my-1 px-5 py-6">
        <Link
          href="#code-examples"
          className="title-font text-2xl font-bold sm:text-3xl"
        >
          Code Examples
        </Link>
        <p className="mt-5 text-gray-300">
          Here are some sample code examples to get you started:
        </p>

        <div className="mt-5 flex flex-col">
          {codeExamples.map((codeExample, index) => (
            <div className="mt-5" key={index}>
              <p className="title-font mb-5 text-2xl font-bold text-gray-300">
                {codeExample.language}
              </p>
              <pre className="rounded-lg text-gray-300">
                <button
                  className="absolute right-14 rounded-md bg-slate-700 px-2 py-1 text-base hover:bg-opacity-70 hover:ring-2 hover:ring-slate-800"
                  onClick={copyCode2Clipboard}
                >
                  Copy
                </button>
                <code className={`lang-${codeExample.className}`}>
                  {codeExample.code.trim()}
                </code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GetPlatformPage;

function copyCode2Clipboard(event) {
  // Copies the code to clipboard
  const text = event.target.parentNode.querySelector("code").innerText.trim();
  navigator.clipboard.writeText(text);
  event.target.innerText = "Copied!";
  setTimeout(() => {
    event.target.innerText = "Copy";
  }, 1300);
}
