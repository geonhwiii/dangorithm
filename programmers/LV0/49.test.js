const solution = require("./49.문자열정렬하기(1)");

describe("49. 문자열정렬하기", () => {
  it(`(1) "hi12392"에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]를 return 합니다.`, () => {
    expect(solution("hi12392")).toEqual([1, 2, 2, 3, 9]);
  });
  it(`(2) "p2o4i8gj2"에 있는 숫자 2, 4, 8, 2를 오름차순 정렬한 [2, 2, 4, 8]을 return 합니다.`, () => {
    expect(solution("p2o4i8gj2")).toEqual([2, 2, 4, 8]);
  });
  it(`(3) abcde0"에 있는 숫자 0을 오름차순 정렬한 [0]을 return 합니다.`, () => {
    expect(solution("abcde0")).toEqual([0]);
  });
});
