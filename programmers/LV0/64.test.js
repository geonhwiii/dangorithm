const solution = require("./64.가까운수");

describe("64. 가까운수", () => {
  it(`(1) 3, 10, 28 중 20과 가장 가까운 수는 28입니다.`, () => {
    expect(solution([3, 10, 28], 20)).toEqual(28);
  });
  it(`(2) 10, 11, 12 중 13과 가장 가까운 수는 12입니다.`, () => {
    expect(solution([10, 11, 12], 13)).toEqual(12);
  });
  it(`(3) fail case`, () => {
    expect(solution([10, 11, 14, 12], 13)).toEqual(12);
  });
});
