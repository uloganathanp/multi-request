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
export declare function multiRequest(urls: Array<string>, isSerial?: boolean, reTryFailed?: number, timeOut?: number, batchSize?: number, urlValidation?: boolean, headers?: {
    [key: string]: string;
}): Promise<any>;
//# sourceMappingURL=index.d.ts.map