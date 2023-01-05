const solution = require("./22.아이스아메리카노");

describe("22. 아이스아메리카노", () => {
  it("case 1", () => {
    expect(solution(5500)).toEqual([1, 0]);
  });
  it("case 2", () => {
    expect(solution(15000)).toEqual([2, 4000]);
  });
});
