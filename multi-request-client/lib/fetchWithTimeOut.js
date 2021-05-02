"use strict";
/*
 * Filename: multi-request\src\fetchWithTimeOut.ts
 * Path: multi-request
 * Created Date: Saturday, May 1st 2021, 10:57:22 am
 * Author: Uloganathan Paramasivam
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWithTimeOut = void 0;
const abort_controller_1 = __importDefault(require("abort-controller"));
const node_fetch_1 = __importDefault(require("node-fetch"));
/**
 * Fetch with timeout - Return promise with rejection if times out
 * @param url
 * @param timeOut
 * @returns
 */
const fetchWithTimeOut = async (url, timeOut, headers) => {
    //Abort request on exceeding time limit
    const controller = new abort_controller_1.default();
    setTimeout(() => controller.abort(), timeOut);
    return node_fetch_1.default(url, { signal: controller.signal, headers: headers }).then((response) => response);
};
exports.fetchWithTimeOut = fetchWithTimeOut;
//# sourceMappingURL=fetchWithTimeOut.js.map