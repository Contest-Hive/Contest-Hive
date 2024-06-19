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

export type StatsDataType = Array<{ key: string; value: number }>;

export type CompressedContestType = [string, string, string, number];
export type PascalNamesType = {
  [key: string]: string;
};
