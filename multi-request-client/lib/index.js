"use strict";
/*
 * Filename: multi-request\src\index.ts
 * Path: multi-request
 * Created Date: Tuesday, April 27th 2021, 5:49:25 pm
 * Author: uparamasivam
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiRequest = void 0;
const fetchWithTimeOut_1 = require("./fetchWithTimeOut");
const urlMapGroups_1 = require("./urlMapGroups");
const validateUrl_1 = require("./validateUrl");
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
async function multiRequest(urls, isSerial = false, reTryFailed = 1, timeOut = 300000, batchSize = 10, urlValidation = true, headers = { "Content-Type": "application/json" }) {
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
    async function getData(url, iteration = 1) {
        try {
            return fetchWithValidation(url);
        }
        catch (error) {
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
    const fetchWithValidation = (url) => {
        if (urlValidation) {
            // If Url validation enabled
            if (validateUrl_1.isValidUrl(url)) {
                return fetchWithTimeOut_1.fetchWithTimeOut(url, timeOut, headers);
            }
            else {
                return new Promise((resolve, reject) => {
                    reject("Invalid URL");
                });
            }
        }
        else {
            return fetchWithTimeOut_1.fetchWithTimeOut(url, timeOut, headers);
        }
    };
    if (isSerial) {
        //Fetch one by one if serial set true
        return urls.reduce(async (promise, url) => {
            let responses = await promise;
            responses.push(await getData(url));
            return responses;
        }, Promise.resolve([]));
    }
    else {
        //Batch process
        const res = await urlMapGroups_1.urlMapGroups(urls, async (url) => {
            return getData(url, reTryFailed);
        }, batchSize);
        return res;
    }
}
exports.multiRequest = multiRequest;
//# sourceMappingURL=index.js.map