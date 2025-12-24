<p align="center">
<img height="100px" src="public/favicon.svg" alt="Contest Hive Logo">
</p>

# Contest Hive - Contests at Your Fingertips

<p align="center">
  <img width="700" alt="Contest Hive Cover" src="https://github.com/user-attachments/assets/86b9f12e-4323-4e82-9c10-8fd6305ac111" />
</p>

<p align="center">
<a href="https://github.com/Contest-Hive/Contest-Hive/actions/workflows/github-code-scanning/codeql">
  <img src="https://github.com/Contest-Hive/Contest-Hive/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main" alt="Build">
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
  - [API Endpoints](#api-endpoints)
  - [API Response Format](#api-response-format)
- [How Does It Work?](#how-does-it-work)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Why Contest Hive?

Contest Hive saves your time by providing you all the upcoming contests from various platforms. So you don't have to visit each platform to check for upcoming contests.

All contests in one place. Isn't it cool?

If you want to know how this is different from **StopStalk**, then you can read the [About Page](https://contest-hive.vercel.app/about/) of Contest Hive. It explains the differences between Contest Hive, StopStalk and Kontests.

## Features

- [x] Upcoming contests from 7 platforms
- [x] Filter contests by **start time** or **platform**
- [x] Contests Update Every **5** Minutes
- [x] Google Calendar Integration
- [x] API for developers
- [x] No Rate Limit on API
- [x] Fully Responsive Design
- [x] Dark Theme to save your eyes 👀

## Platforms

- [x] Atcoder
- [x] Codechef
- [x] Codeforces `includes Codeforces GYM`
- [x] Hackerearth
- [x] Hackerrank
- [x] Leetcode
- [x] Toph

## API

Contest Hive provides an API for developers to fetch upcoming contests. The Documentation for the API can be found [here](https://contest-hive.vercel.app/docs).

The documentation fully explains how to use the API and the response formats.

### API Endpoints

| Endpoint                                                                | Alias                                                      | Description                                                     |
| ----------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------- |
| [`/api/`](https://contest-hive.vercel.app/api)                           | [](https://contest-hive.vercel.app/api/)                   | Root Endpoint of api                                            |
| [`/atcoder`](https://contest-hive.vercel.app/api/atcoder)               | [`/1`](https://contest-hive.vercel.app/api/atcoder)        | Returns all the future contests information from AtCoder        |
| [`/codechef`](https://contest-hive.vercel.app/api/codechef)             | [`/2`](https://contest-hive.vercel.app/api/codechef)       | (same as above for) Codechef       |
| [`/codeforces`](https://contest-hive.vercel.app/api/codeforces)         | [`/3`](https://contest-hive.vercel.app/api/codeforces)     | (same as above for) Codeforces     |
| [`/hackerearth`](https://contest-hive.vercel.app/api/hackerearth)       | [`/4`](https://contest-hive.vercel.app/api/hackerearth)    | (same as above for) Hackerearth    |
| [`/hackerrank`](https://contest-hive.vercel.app/api/hackerrank)         | [`/5`](https://contest-hive.vercel.app/api/hackerrank)     | (same as above for) Hackerrank     |
| [`/leetcode`](https://contest-hive.vercel.app/api/leetcode)             | [`/6`](https://contest-hive.vercel.app/api/leetcode)       | (same as above for) Leetcode       |
| [`/toph`](https://contest-hive.vercel.app/api/toph)                     | [`/7`](https://contest-hive.vercel.app/api/toph)           | (same as above for) Toph           |
| [`/codeforces-gym`](https://contest-hive.vercel.app/api/codeforces-gym) | [`/8`](https://contest-hive.vercel.app/api/codeforces-gym) | (same as above for) Codeforces GYM |

### API Response Format

The API returns a JSON object with the following format for each platform:

```json
{
  "ok": true,
  "data": [
    {
      "title": "UNIQUE VISION Programming Contest 2023 Autumn(AtCoder Beginner Contest 323)",
      "url": "https://atcoder.jp/contests/abc323",
      "startTime": "2023-10-07T12:00:00Z",
      "endTime": "2023-10-07T13:40:00Z",
      "duration": 6000,
      "platform": "Atcoder"
    },
    {
      "title": "AtCoder Regular Contest 166",
      "url": "https://atcoder.jp/contests/arc166",
      "startTime": "2023-10-08T12:00:00Z",
      "endTime": "2023-10-08T14:00:00Z",
      "duration": 7200,
      "platform": "Atcoder"
    }
  ],
  "lastUpdated": "2025-03-03T14:31:22Z"
}
```

The response types and details are explained in the [API Documentation](https://contest-hive.vercel.app/docs/all).

## How Does It Work?

Contest Hive uses **Github Actions** to run a python script every 5 minutes which fetches the contests info and stores them in a JSON file. The JSON file is then used and cached by the Contest Hive API to serve the data to the users.

This way, the API doesn't have to fetch the data from the platforms every time a user makes a request.


The Backend repository of Contest Hive can be found [here](https://github.com/Contest-Hive/__contest-hive-backend)

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

# Repo Activity

![Alt](https://repobeats.axiom.co/api/embed/68af15f7d6e18ff8f4851dea4b7eae62305bff1f.svg "Repobeats analytics image")

# Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Contest-Hive/Contest-Hive&type=Date)](https://star-history.com/#Contest-Hive/Contest-Hive&Date)
