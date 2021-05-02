/*
 * Filename: multi-request\src\urlMapGroups.ts
 * Path: multi-request
 * Created Date: Saturday, May 1st 2021, 10:12:27 pm
 * Author: Uloganathan Paramasivam
 */

import { groupByCount } from "./groupByContent";

/**
 * Create map of promises based on batch size
 * @param urlList
 * @param iterator - Function which fetches data
 * @param groupSize
 * @returns - single promise contains all the responses
 */
export const urlMapGroups = (
  urlList: Array<string>,
  iterator: any | Function,
  groupSize: number
): any => {
  //Creates chunks of url list
  const groups: Array<Array<string>> = groupByCount(urlList, groupSize);
  
  return Object.values(groups).reduce(
    async (memo: any, group: Array<string>) => [
      ...(await memo),
      ...(await Promise.allSettled(group.map(iterator))),
    ],
    Promise.resolve([])
  );
};
