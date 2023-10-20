export default async function GenerateRssFeed() {

  const rssUrl =
    "https://raw.githubusercontent.com/Contest-Hive/__contest-hive-backend/cache/cache/Data/rss.xml";

  const res = await fetch(rssUrl, {
    next: {
      revalidate: 5 * 60,
    },
  });

  const xml = await res.text();
  return xml;
}
