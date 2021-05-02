/*
 * Filename: multi-request\src\urlMapGroups.ts
 * Path: multi-request
 * Created Date: Saturday, May 1st 2021, 10:12:27 pm
 * Author: Uloganathan Paramasivam
 */

import { groupByCount } from "./groupByContent";

/**
 * Create map of promises
 * @param urlList
 * @param iterator
 * @param groupSize
 * @returns
 */
export const urlMapGroups = (
  urlList: Array<string>,
  iterator: any | Function,
  groupSize: number
): any => {
  const groups: Array<Array<string>> = groupByCount(urlList, groupSize);
  return Object.values(groups).reduce(
    async (memo: any, group: Array<string>) => [
      ...(await memo),
      ...(await Promise.allSettled(group.map(iterator))),
    ],
    Promise.resolve([])
  );
};
