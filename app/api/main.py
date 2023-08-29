import os

data = {
    "message": [
        "atcoder",
        "codechef",
        "codeforces",
        "hackerearth",
        "hackerrank",
        "leetcode",
        "toph"
    ],
    "data": {
        "1": "atcoder",
        "2": "codechef",
        "3": "codeforces",
        "4": "hackerearth",
        "5": "hackerrank",
        "6": "leetcode",
        "7": "toph"
    }
}


def getText(name):
    text = """
const API_URL = "https://raw.githubusercontent.com/Nusab19/__contest-hive-backend/main/cache/Data/"""+name+""".json";

export async function GET() {
	const response = await fetch(API_URL, {
	next: {
	  revalidate: 10 * 60, // 10 Minutes
	},
	});
	
	const data = await response.json();
	return new Response(JSON.stringify(data, null, 4));
}

	""".strip()

    return text


for i, platform in data["data"].items():
    for x in [i, platform]:
        if not os.path.exists(x):
            os.mkdir(x)
        with open(f"{x}/route.js", 'w', encoding="utf8") as f:
            f.write(getText(platform))
