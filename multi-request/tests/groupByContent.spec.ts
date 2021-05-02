import { groupByCount } from "../src/groupByContent";

describe("Group by count", function () {
  it("groupBy", function () {
    let result = groupByCount(["1", "2", "3", "4", "5"], 2);
    expect(result).toEqual([["1", "2"], ["3", "4"], ["5"]]);
  });
  it("groupBy length", function () {
    let result = groupByCount(["1", "2", "3", "4", "5"], 2);
    expect(result.length).toEqual(3);
  });
  it("single group", function () {
    let result = groupByCount(["1", "2"], 2);
    expect(result).toEqual([["1", "2"]]);
  });
  it("check empty groupby", function () {
    let result = groupByCount([], 2);
    expect(result).toEqual([]);
  });
  it("check single value", function () {
    let result = groupByCount(["a"], 2);
    expect(result).toEqual([["a"]]);
  });
});
