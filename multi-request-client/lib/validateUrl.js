"use strict";
/*
 * Filename: multi-request\src\validateUrl.ts
 * Path: multi-request
 * Created Date: Saturday, May 1st 2021, 10:57:22 am
 * Author: Uloganathan Paramasivam
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrl = void 0;
/**
 *
 * @param url
 * @returns - true if url is valid
 */
const isValidUrl = (url) => {
    try {
        return Boolean(new URL(url));
    }
    catch (e) {
        return false;
    }
};
exports.isValidUrl = isValidUrl;
//# sourceMappingURL=validateUrl.js.map