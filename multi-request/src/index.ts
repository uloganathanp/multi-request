/*
 * Filename: multi-request\src\index.ts
 * Path: multi-request
 * Created Date: Tuesday, April 27th 2021, 5:49:25 pm
 * Author: uparamasivam
 *
 */

import { fetchWithTimeOut } from "./fetchWithTimeOut";
import { urlMapGroups } from "./urlMapGroups";
import { isValidUrl } from "./validateUrl";

/**
 *
 * @param urls - List of urls
 * @param isSerial - fetch data serially or batch wise
 * @param reTryFailed - number of times try failed requests
 * @param timeOut - set timeout if request taking too long
 * @param batchSize - define bach size for concurrent fetch
 * @param headers - fetch headers
 * @returns - Promise with all the responses
 *
 */
export async function multiRequest(
  urls: Array<string>,
  isSerial: boolean = true,
  reTryFailed: number = 1,
  timeOut: number = 300000,
  batchSize: number = 10,
  urlValidation: boolean = true,
  headers: { [key: string]: string } = { "Content-Type": "application/json" } //As per request, setting default content type as json
) {
  //Validate url list and return with promise if not valid
  if (urls.length === 0 || !urls) {
    return new Promise((resolve, reject) => {
      reject("Invalid URL list");
    });
  }

  /**
   * Retriving fetch serially
   * @param url
   * @param iteration - number of retry fetch
   * @returns - fetch promise
   */
  async function getData(url: string, iteration: number = 1): Promise<any> {
    try {
      return fetchWithValidation(url);
    } catch (error) {
      if (iteration === reTryFailed) {
        return error;
      }
      console.log(error);
      return getData(url, iteration + 1);
    }
  }

  /**
   * Fetch data after checking URL validation
   * @param url
   * @returns
   */
  const fetchWithValidation = (url: string) => {
    if (urlValidation) {
      // If Url validation enabled
      if (isValidUrl(url)) {
        return fetchWithTimeOut(url, timeOut, headers);
      } else {
        return new Promise((resolve, reject) => {
          reject("Invalid URL");
        });
      }
    } else {
      return fetchWithTimeOut(url, timeOut, headers);
    }
  };

  if (isSerial) {
    //Fetch one by one if serial set true
    return urls.reduce(async (promise, url) => {
      let responses: any = await promise;
      responses.push(await getData(url));
      return responses;
    }, Promise.resolve([]));
  } else {
    //Batch process
    const res = await urlMapGroups(
      urls,
      async (url: string) => {
        return getData(url, reTryFailed);
      },
      batchSize
    );
    return res;
  }
}
