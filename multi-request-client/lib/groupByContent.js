"use strict";
/*
 * Filename: multi-request\src\groupByContent.ts
 * Path: multi-request
 * Created Date: Saturday, May 1st 2021, 10:57:22 am
 * Author: Uloganathan Paramasivam
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByCount = void 0;
/**
 *
 * @param urlList - List of Urls passed
 * @param groupSize - Size of the sub array
 * @returns - Array of sub arrays with size given
 */
function groupByCount(urlList, groupSize) {
    if (!urlList) {
        return [];
    }
    return urlList.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / groupSize);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);
}
exports.groupByCount = groupByCount;
//# sourceMappingURL=groupByContent.js.map