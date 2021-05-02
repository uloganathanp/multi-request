import { urlMapGroups } from "../src/urlMapGroups";

describe("URL Map Groups", function () {
  it("result should be defined", function () {
    let result = urlMapGroups(
      [
        "http://localhost:8000/employees/1",
        "http://localhost:8000/employees/2",
      ],
      async (url: string) => url,
      1
    );
    expect(result).toBeDefined();
  });
  it("result length should match", function () {
    let result = urlMapGroups(
      [
        "http://localhost:8000/employees/1",
        "http://localhost:8000/employees/2",
      ],
      async (url: string) => url,
      1
    );
    result.then((data: any) => {
      expect(data.length).toBe(2);
    });
  });
  it("empty array check", function () {
    let result = urlMapGroups([], async (url: string) => url, 1);
    result.then((data: any) => {
      expect(data.length).toBe(0);
    });
  });
});
