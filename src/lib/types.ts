export type ContestType = {
  title: string;
  url: string;
  startTime: string;
  endTime: string;
  duration: number;
  platform: string;
};

export type CompressedContestType = [string, string, string, number];
export type PascalNamesType = {
  [key: string]: string;
};
