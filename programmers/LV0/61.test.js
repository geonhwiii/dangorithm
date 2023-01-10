const solution = require("./61.최빈값구하기");

describe("61. 최빈값구하기", () => {
  it(`(1) [1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.`, () => {
    expect(solution([1, 2, 3, 3, 3, 4])).toEqual(3);
  });
  it(`(2) [1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.`, () => {
    expect(solution([1, 1, 2, 2])).toEqual(-1);
  });
  it(`(3) [1]에는 1만 있으므로 최빈값은 1입니다.`, () => {
    expect(solution([1])).toEqual(1);
  });
  it(`(4) fail case`, () => {
    expect(solution([1, 2, 3, 3, 4])).toEqual(3);
  });
});
