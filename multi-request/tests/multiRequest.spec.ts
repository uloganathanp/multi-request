import { multiRequest } from "../src";

describe("muti-request", function () {
  it("Result Defined", function () {
    let result = multiRequest(["a", "b"]);
    expect(result).toBeDefined();
  });
  it("Default batch check", function () {
    let result = multiRequest([
      "http://localhost:8000/employees/1",
      "http://localhost:8000/employees/2",
    ]);
    result.then((data) => {
      expect(data.length).toBe(2);
    });
  });
  it("Serial fetch check", function () {
    let result = multiRequest(
      [
        "http://localhost:8000/employees/1",
        "http://localhost:8000/employees/2",
      ],
      true
    );
    result.then((data) => {
      expect(data.length).toBe(2);
    });
  });
  it("empty array check", async function () {
    try {
      const result = await multiRequest([], true);
    } catch (error) {
      expect(error).toBe("Invalid URL list");
    }
  });
  it("check fetch with iteration", function () {
    let result = multiRequest(
      [
        "http://localhost:8000/employees/1",
        "http://localhost:8000/employees/2",
      ],
      false,
      2
    );
    result.then((data) => {
      expect(data.length).toBe(2);
    });
  });
  it("check fetch with iteration and timeout", function () {
    let result = multiRequest(
      [
        "http://localhost:8000/employees/1",
        "http://localhost:8000/employees/2",
      ],
      false,
      2,
      300
    );
    result.then((data) => {
      expect(data.length).toBe(2);
    });
  });
});
