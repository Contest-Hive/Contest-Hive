import os
import time
from pprint import pprint
from datetime import datetime

# needs to run from the /public folder

if os.getcwd().split("\\")[-1] != "public":
    if "public" in os.listdir():
        print("Running from the root folder...")
        print()
        os.chdir("public/")

    else:
        pprint("Please run this script from the /public folder or from the root folder")
else:
    print("Running from the /public folder...")
    print()

os.chdir("../app/")


paths = {
    "about": ["about"],
    "credits": ["credits"],
    "docs": [
        "docs",
        "docs/all",
        "docs/atcoder",
        "docs/codechef",
        "docs/codeforces",
        "docs/codeforces-gym",
        "docs/hackerearth",
        "docs/hackerrank",
        "docs/leetcode",
        "docs/toph"
    ],
}


def getModTime(filePath: str):
    modTime = os.path.getmtime(filePath)
    modTime = datetime.utcfromtimestamp(modTime).isoformat() + "Z"
    return modTime


def getFilesInFolder(folder: str):
    files = []
    folder = folder.strip("/")

    for file in os.listdir(folder):
        # checks if this is a file, if so, add it to the list
        # if it's a folder, call this function again
        filePath = f"{folder}/{file}"
        if os.path.isfile(filePath):
            files.append(filePath)
        else:
            files += getFilesInFolder(filePath)

    return files


def getLatestModTime(files: list):
    latestModTime = 0
    for file in files:
        modTime = getModTime(file)
        # convert the iso format to seconds and compare it with the latestModTime
        modTime = time.mktime(datetime.strptime(
            modTime, "%Y-%m-%dT%H:%M:%S.%fZ").timetuple())

        if modTime > latestModTime:
            latestModTime = modTime
    # convert the latestModTime to iso format
    latestModTime = datetime.utcfromtimestamp(latestModTime).isoformat() + "Z"
    return latestModTime


def main():
    sitemapData = {}
    rootUrl = "https://contest-hive.vercel.app"

    # for the urls, the modTime in the `dir` is the latest modTime of all the files in that folder
    for dir, urls in paths.items():
        files = getFilesInFolder(dir)
        modTime = getLatestModTime(files)

        for url in urls:
            url = f"{rootUrl}/{url}"
            sitemapData[url] = modTime

    allSites = f"""
<url>
    <loc>{rootUrl}</loc>
    <lastmod>{datetime.utcfromtimestamp(time.time()).isoformat() + "Z"}</lastmod>
</url>
""".strip()


    for url, modTime in sitemapData.items():
        allSites += f"""
<url>
    <loc>{url}</loc>
    <lastmod>{modTime}</lastmod>
</url>"""

    sitemap = f"""
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {allSites}
</urlset>
    """.strip()

    with open("../public/sitemap.xml", 'w', encoding="utf8") as f:
        f.write(sitemap)

    print("sitemap.xml generated")


if __name__ == "__main__":
    print("Generating sitemap.xml")
    main()
