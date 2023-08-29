const platforms = {
  ok: true,
  data: [
    "atcoder",
    "codechef",
    "codeforces",
    "hackerearth",
    "hackerrank",
    "leetcode",
    "toph",
  ],
  alais: {
    1: "atcoder",
    2: "codechef",
    3: "codeforces",
    4: "hackerearth",
    5: "hackerrank",
    6: "leetcode",
    7: "toph",
  },
};

export async function GET() {
  return new Response(JSON.stringify(platforms, null, 4));
}
