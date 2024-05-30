import os
import pathlib


# Change the directory to the root of the project
scriptPath = pathlib.Path(__file__).resolve()

targetDirectory = scriptPath.parents[0]
while targetDirectory.name != "(main)":
    targetDirectory = targetDirectory.parent

os.chdir(targetDirectory)

# ----------------------------

with open("template.ts", "r", encoding="utf8") as f:
    template = f.read()


def getPlatformTemplate(platformName: str):
    return template.replace("$platformName", platformName)


data = {
    "data": {
        "all": "all",
        "1": "atcoder",
        "2": "codechef",
        "3": "codeforces",
        "4": "hackerearth",
        "5": "hackerrank",
        "6": "leetcode",
        "7": "toph",
        "8": "codeforces_gym",
    },
}

for i, platform in data["data"].items():
    for x in [i, platform]:
        x = x.replace("_", "-")
        if not os.path.exists(x):
            os.mkdir(x)

        with open(f"{x}/route.ts", "w", encoding="utf8") as f:
            f.write(getPlatformTemplate(platform))

        print(f"Created {x}/route.ts")
