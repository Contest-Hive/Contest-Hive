import Link from "next/link";

const exampleResponse = {
  ok: true,
  data: [
    {
      name: "SuntoryProgrammingContest2023（AtCoder Beginner Contest 321）",
      url: "https://atcoder.jp/contests/abc321",
      startTime: "2023-09-23T12:00:00.000+00:00",
      readableStartTime: "23rd September, 2023 12:00:00 PM UTC",
      startingIn: "5 days",
      duration: "1 hour 40 minutes",
      durationSeconds: 6000,
    },
    {
      name: "Marubeni Programming Contest 2023 (AtCoder Heuristic Contest 024)",
      url: "https://atcoder.jp/contests/ahc024",
      startTime: "2023-09-24T06:00:00.000+00:00",
      readableStartTime: "24th September, 2023 06:00:00 AM UTC",
      startingIn: "6 days",
      duration: "4 hours",
      durationSeconds: 14400,
    },
  ],
  lastUpdated: "17-09-2023 18:39:30 UTC",
};

const properties = [
  {
    name: "ok",
    type: "bool",
    description: "Whether the request was successful - true or false",
  },

  {
    name: "data",
    type: "list",
    description: "The data returned from the API",
  },

  {
    name: "name",
    type: "string",
    description: "The name of the contest",
  },

  {
    name: "url",
    type: "string",

    description: "The url of the contest",
  },

  {
    name: "startTime",
    type: "string",
    description: "The start time of the contest",
  },

  {
    name: "readableStartTime",
    type: "string",
    description: "The start time of the contest in a readable format",
  },

  {
    name: "startingIn",
    type: "string",
    description: "The time left for the contest to start",
  },

  {
    name: "duration",
    type: "string",
    description: "The duration of the contest",
  },

  {
    name: "durationSeconds",
    type: "number",
    description: "The duration of the contest in seconds",
  },

  {
    name: "lastUpdated",
    type: "string",
    description: "The last time the data was updated",
  },
];

const page = () => {
  return (
    <>
      <div id="#" className="container mx-auto my-6 mt-12 px-5">
        <header className="title-font text-3xl font-bold text-white sm:text-4xl">
          AtCoder
        </header>
        <p className="mt-5 text-gray-300">
          As mentioned in{" "}
          <Link href="/docs/" className="font-semibold text-red-400">
            the docs
          </Link>{" "}
          before, the format of the request is the same.
        </p>
      </div>
      {/* Request Format for AtCoder */}
      <div className="container mx-auto my-1 px-5 py-6" id="request-format">
        <Link
          href="#request-format"
          className="title-font text-2xl font-bold sm:text-3xl"
        >
          Request Format
        </Link>
        <p className="mt-5 text-gray-300">
          Make a <b>GET</b> request to{" "}
          <Link href="/api/atcoder" className="font-mono text-red-400">
            /api/atcoder
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
            <div className="overflow-x-auto rounded-lg bg-slate-900 px-4 py-2">
              {/* Add `copy` button so the user can copy the response by clicking it */}
              <pre className="text-xs text-gray-300">
                {JSON.stringify(exampleResponse, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Sample code example starts here */}
    </>
  );
};

export default page;
