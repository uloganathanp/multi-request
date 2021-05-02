const { multiRequest } = require("./lib/index");

const urls = [
  "https://ft-tech-test-example.s3-eu-west-11111.amazonaws.com/ftse-fsi.xml",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json",
];

/**
 *
 * @param {*} urls
 */
function clientMultiRequest(urls) {
  multiRequest(urls)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

clientMultiRequest(urls);
