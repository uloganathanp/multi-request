/*
 * Filename: multi-request\src\fetchWithTimeOut.ts
 * Path: multi-request
 * Created Date: Saturday, May 1st 2021, 10:57:22 am
 * Author: Uloganathan Paramasivam
 *
 */

import { promisedData } from "../promisedData";

/**
 * Fetch with timeout - Return promise with rejection if times out
 * @param url
 * @param timeOut
 * @returns
 */
export const fetchWithTimeOut = async (url: string, timeOut: number) => {
  return Promise.resolve(promisedData);
};
