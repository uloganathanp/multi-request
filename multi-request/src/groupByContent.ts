/*
 * Filename: multi-request\src\groupByContent.ts
 * Path: multi-request
 * Created Date: Saturday, May 1st 2021, 10:57:22 am
 * Author: Uloganathan Paramasivam
 *
 */

/**
 *
 * @param urlList - List of Urls passed
 * @param groupSize - Size of the sub array
 * @returns - Array of sub arrays with size given
 */
export function groupByCount(
  urlList: Array<string>,
  groupSize: number
): Array<Array<string>> {
  if (!urlList) {
    return [];
  }
  return urlList.reduce((resultArray: Array<Array<string>>, item, index) => {
    const chunkIndex = Math.floor(index / groupSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
}
