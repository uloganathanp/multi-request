/*
 * Filename: multi-request\src\validateUrl.ts
 * Path: multi-request
 * Created Date: Saturday, May 1st 2021, 10:57:22 am
 * Author: Uloganathan Paramasivam
 *
 */

/**
 *
 * @param url
 * @returns - true if url is valid
 */
export const isValidUrl = (url: string) => {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
};
