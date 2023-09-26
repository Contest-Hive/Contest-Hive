<p align="center">
<img height="100px" src="public/favicon.svg" alt="Contest Hive Logo">
</p>

# Contest Hive - Contests at Your Fingertips

<p align="center">

<a href="https://github.com/Nusab19/Contest-Hive/actions/workflows/npm-publish-github-packages.yml">
  <img src="https://github.com/Nusab19/Contest-Hive/actions/workflows/npm-publish-github-packages.yml/badge.svg" alt="Build">
</a>
<a href="https://contest-hive.vercel.app/docs/">
  <img src="https://img.shields.io/badge/Docs-passing-33cb56" alt="Docs">
</a>
<a href="https://contest-hive.vercel.app/">
  <img src="https://therealsujitk-vercel-badge.vercel.app/?app=contest-hive" alt="Vercel">
</a>
<a href="https://contest-hive.vercel.app/">
  <img src="https://img.shields.io/website?down_color=red&down_message=down&up_color=33cb56&up_message=up&url=https%3A%2F%2Fcontest-hive.vercel.app%2F" alt="Website">
</a>
<a href="https://contest-hive.vercel.app/api/">
  <img src="https://img.shields.io/badge/API-passing-33cb56" alt="API">
</a>
<a href="LICENSE">
  <img src="https://img.shields.io/badge/LICENSE-Apache%202.0-blue" alt="Apache License">
</a>

</p>

Live at [contest-hive.vercel.app](https://contest-hive.vercel.app/)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Why Contest Hive?](#why-contest-hive)
- [Features](#features)
- [Platforms](#platforms)
- [API](#api)

## Why Contest Hive?

Contest Hive saves your time by providing you all the upcoming contests from various platforms. So you don't have to visit each platform to check for upcoming contests.

All contests in one place. Isn't it cool?

## Features

- [x] Upcoming contests from 7 platforms
- [x] Filter contests by platform
- [x] Contests Update Every 10 Minutes
- [x] API for developers
- [x] No Rate Limit on API
- [x] Fully Responsive Design
- [x] Dark Theme to save your eyes 👀

## Platforms

- [x] Atcoder
- [x] Codechef
- [x] Codeforces
- [x] Codeforces GYM
- [x] Hackerearth
- [x] Hackerrank
- [x] Leetcode
- [x] Toph

## API

Contest Hive provides an API for developers to fetch upcoming contests. The Documentation for the API can be found [here](https://contest-hive.vercel.app/docs).

The documentation fully explains how to use the API and the response formats.

### API Endpoints

| Endpoint                                                                    | Alias                                                      | Description                                                     |
| --------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------- |
| [`/api`](https://contest-hive.vercel.app/api)                               | [`/`](https://contest-hive.vercel.app/api/)                | Root Endpoint of api                                            |
| [`/api/atcoder`](https://contest-hive.vercel.app/api/atcoder)               | [`/1`](https://contest-hive.vercel.app/api/atcoder)        | Returns all the future contests information from AtCoder        |
| [`/api/codechef`](https://contest-hive.vercel.app/api/codechef)             | [`/2`](https://contest-hive.vercel.app/api/codechef)       | Returns all the future contests information from Codechef       |
| [`/api/codeforces`](https://contest-hive.vercel.app/api/codeforces)         | [`/3`](https://contest-hive.vercel.app/api/codeforces)     | Returns all the future contests information from Codeforces     |
| [`/api/hackerearth`](https://contest-hive.vercel.app/api/hackerearth)       | [`/4`](https://contest-hive.vercel.app/api/hackerearth)    | Returns all the future contests information from Hackerearth    |
| [`/api/hackerrank`](https://contest-hive.vercel.app/api/hackerrank)         | [`/5`](https://contest-hive.vercel.app/api/hackerrank)     | Returns all the future contests information from Hackerrank     |
| [`/api/leetcode`](https://contest-hive.vercel.app/api/leetcode)             | [`/6`](https://contest-hive.vercel.app/api/leetcode)       | Returns all the future contests information from Leetcode       |
| [`/api/toph`](https://contest-hive.vercel.app/api/toph)                     | [`/7`](https://contest-hive.vercel.app/api/toph)           | Returns all the future contests information from Toph           |
| [`/api/codeforces-gym`](https://contest-hive.vercel.app/api/codeforces-gym) | [`/8`](https://contest-hive.vercel.app/api/codeforces-gym) | Returns all the future contests information from Codeforces GYM |

### API Response Format

The API returns a JSON object with the following format for each platform:

```json
{
  "ok": true,
  "data": [
    {
      "name": "AtCoder Beginner Contest 322",
      "url": "https://atcoder.jp/contests/abc322",
      "startTime": "2023-09-30T12:00:00Z",
      "readableStateTime": "30th September, 2023 at 12:00:00",
      "duration": "1 hour 40 minutes",
      "durationSeconds": 6000
    },
    {
      "name": "UNIQUE VISION Programming Contest 2023 Autumn(AtCoder Beginner Contest 323)",
      "url": "https://atcoder.jp/contests/abc323",
      "startTime": "2023-10-07T12:00:00Z",
      "readableStateTime": "7th October, 2023 at 12:00:00",
      "duration": "1 hour 40 minutes",
      "durationSeconds": 6000
    }
  ],
  "lastUpdated": "2023-09-26T14:31:22Z"
}
```

The response types and details are explained in the [API Documentation](https://contest-hive.vercel.app/docs/all).

## Contributing

Contributions are always welcome! Feel free to raise a PR. If you have any suggestions or want to report a bug, please open an issue.

## License

Contest Hive is licensed under the [Apache License](LICENSE)

## Links

- [Contest Hive](https://contest-hive.vercel.app/) - Home Page of Contest Hive
- [Contest Hive API](https://contest-hive.vercel.app/api/) - API Endpoint of Contest Hive
- [Contest Hive API Documentation](https://contest-hive.vercel.app/docs/) - Documentation of Contest Hive API
- [About Page of Contest Hive](https://contest-hive.vercel.app/about/) - About Page of Contest Hive
- [Credits Page of Contest Hive](https://contest-hive.vercel.app/credits/) - Credits Page of Contest Hive
