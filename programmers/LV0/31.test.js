const solution = require("./31.짝수는싫어요");

describe("31. 짝수는싫어요", () => {
  it(`(1)10 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9]를 return합니다.`, () => {
    expect(solution(10)).toEqual([1, 3, 5, 7, 9]);
  });
  it(`(2) 15 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9, 11, 13, 15]를 return합니다.`, () => {
    expect(solution(15)).toEqual([1, 3, 5, 7, 9, 11, 13, 15]);
  });
});
