const solution = require("./32.중앙값구하기");

describe("32. 중앙값구하기", () => {
  it(`(1) 본문과 동일합니다.`, () => {
    expect(solution([1, 2, 7, 10, 11])).toBe(7);
  });
  it(`(2) 9, -1, 0을 오름차순 정렬하면 -1, 0, 9이고 가장 중앙에 위치하는 값은 0입니다.`, () => {
    expect(solution([9, -1, 0])).toBe(0);
  });
});
