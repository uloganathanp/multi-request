"use strict";
/*
 * Filename: multi-request\src\urlMapGroups.ts
 * Path: multi-request
 * Created Date: Saturday, May 1st 2021, 10:12:27 pm
 * Author: Uloganathan Paramasivam
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlMapGroups = void 0;
const groupByContent_1 = require("./groupByContent");
/**
 * Create map of promises
 * @param urlList
 * @param iterator
 * @param groupSize
 * @returns
 */
const urlMapGroups = (urlList, iterator, groupSize) => {
    const groups = groupByContent_1.groupByCount(urlList, groupSize);
    return Object.values(groups).reduce(async (memo, group) => [
        ...(await memo),
        ...(await Promise.allSettled(group.map(iterator))),
    ], Promise.resolve([]));
};
exports.urlMapGroups = urlMapGroups;
//# sourceMappingURL=urlMapGroups.js.map