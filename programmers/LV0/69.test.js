const solution = require("./69.7의개수");

describe("69. 7의개수", () => {
  it(`(1) [7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.`, () => {
    expect(solution([7, 77, 17])).toBe(4);
  });
  it(`(2) [10, 29]에는 7이 없으므로 0을 return 합니다.`, () => {
    expect(solution([10, 29])).toBe(0);
  });
});
