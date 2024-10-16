import AtcoderLogo from "@/components/svg/atcoder";
import CodechefLogo from "@/components/svg/codechef";
import CodeforcesLogo from "@/components/svg/codeforces";
import HackerearthLogo from "@/components/svg/hackerearth";
import HackerrankLogo from "@/components/svg/hackerrank";
import LeetcodeLogo from "@/components/svg/leetcode";
import TophLogo from "@/components/svg/toph";
import React from "react";

const LOGOS = [
  (<AtcoderLogo />) as React.ReactElement,
  (<CodechefLogo />) as React.ReactElement,
  (<CodeforcesLogo />) as React.ReactElement,
  (<HackerearthLogo />) as React.ReactElement,
  (<HackerrankLogo />) as React.ReactElement,
  (<LeetcodeLogo />) as React.ReactElement,
  (<TophLogo />) as React.ReactElement,
];

const LogoIndex = {
  atcoder: 1,
  codechef: 2,
  codeforces: 3,
  hackerearth: 4,
  hackerrank: 5,
  leetcode: 6,
  toph: 7,
};

type PlatformType =
  | "atcoder"
  | "codeforces"
  | "leetcode"
  | "codechef"
  | "toph"
  | "hackerrank"
  | "hackerearth";

export function getPlatformLogo(platform: string) {
  const component =
    LOGOS[LogoIndex[platform.toLowerCase() as PlatformType] - 1];
  return component;
}
