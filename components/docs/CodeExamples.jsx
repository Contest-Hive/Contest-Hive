// This is a simple example of how to use the format function in javascript
// The format function is used to replace the {} in a string with the arguments passed to the function
// It works similar to the .format function in python
String.prototype.format = function () {
  let args = Array.prototype.slice.call(arguments);
  let string = this;
  for (let i = 0; i < args.length; i++) {
    string = string.replace("{}", args[i]);
  }
  return string;
};

const python = `
import requests

url = "{}"
response = requests.get(url)
print(response.json())
`;

const pythonAsync = `
import httpx
import asyncio

async def main():
    url = "{}"
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        print(response.json())
    
asyncio.run(main())
`;

const javascript = `
const url = "{}";

const response = await fetch(url);
const data = await response.json();
console.log(data);
`;

const javascriptAsync = `
const url = "{}";

const response = await fetch(url);
const data = await response.json();
console.log(data);
`;

/**
 *
 * @param {string} platformName - The name of the platform
 */
function getCodeExamples(platformName) {
  const url = `https://contest-hive.vercel.app/api/${platformName.toLowerCase()}`;

  const codeExamples = [
    {
      language: "python",
      code: python.trim().format(url),
      codeAsync: pythonAsync.trim().format(url),
      className: "js", // js class works for python too :3
    },
    {
      language: "javascript",
      code: javascript.trim().format(url),
      codeAsync: javascriptAsync.trim().format(url),
      className: "js",
    },
  ];

  return codeExamples;
}

export default getCodeExamples;
