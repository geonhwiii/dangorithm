const solution = require("./33.분수의덧셈");

describe("33. 분수의덧셈", () => {
  it(`(1) 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.`, () => {
    expect(solution(1, 2, 3, 4)).toEqual([5, 4]);
  });
  it(`(2) 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.`, () => {
    expect(solution(9, 2, 1, 3)).toEqual([29, 6]);
  });
  it(`(3) fail case`, () => {
    expect(solution(1, 2, 1, 2)).toEqual([1, 1]);
  });
});
