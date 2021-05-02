import { fetchWithTimeOut } from "./mocks/fetchWithTimeOut";

describe("fetch-data-with-timeout", function () {
  let data: any;
  beforeEach(async () => {
    await fetchWithTimeOut("abc", 300).then((res) => {
      data = res;
    });
  });
  it("check data defined", function () {
    expect(data).toBeDefined();
  });
});
