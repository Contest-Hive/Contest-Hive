export type ContestType = {
  title: string;
  url: string;
  startTime: string;
  endTime: string;
  duration: number;
  platform: string;
};

export interface ContestDataType {
  [key: string]: ContestType[];
}

export type StatsDataType = {
  title: string;
  value: any;
  description: string;
}[];

export type CompressedContestType = [string, string, string, number];
export type PascalNamesType = {
  [key: string]: string;
};
