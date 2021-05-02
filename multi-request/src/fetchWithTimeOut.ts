/*
 * Filename: multi-request\src\fetchWithTimeOut.ts
 * Path: multi-request
 * Created Date: Saturday, May 1st 2021, 10:57:22 am
 * Author: Uloganathan Paramasivam
 *
 */

import AbortController from "abort-controller";
import _fetch from "node-fetch";

/**
 * Fetch with timeout - Return promise with rejection if times out
 * @param url
 * @param timeOut
 * @returns
 */
export const fetchWithTimeOut = async (
  url: string,
  timeOut: number,
  headers: { [key: string]: string }
) => {
  //Abort request on exceeding time limit
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeOut);
  return _fetch(url, { signal: controller.signal, headers: headers }).then(
    (response: any) => response
  );
};
