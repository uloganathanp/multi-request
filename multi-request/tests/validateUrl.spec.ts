import { isValidUrl } from "../src/validateUrl";

describe("validate-url", function () {
  it("valid url", function () {
    let result = isValidUrl("http://abc.com");
    expect(result).toBeTrue();
  });
  it("valid url", function () {
    let result = isValidUrl("https://abc.com");
    expect(result).toBeTrue();
  });
  it("not valid url", function () {
    let result = isValidUrl("abc.com");
    expect(result).toBeFalse();
  });
  it("empty url", function () {
    let result = isValidUrl("");
    expect(result).toBeFalse();
  });
});
