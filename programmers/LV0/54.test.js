const solution = require("./54.팩토리얼");

describe("54. 팩토리얼", () => {
  it(`(1) 10! = 3,628,800입니다. n이 3628800이므로 최대 팩토리얼인 10을 return 합니다.`, () => {
    expect(solution(3628800)).toEqual(10);
  });
  it(`(2) 3! = 6, 4! = 24입니다. n이 7이므로, 7 이하의 최대 팩토리얼인 3을 return 합니다.`, () => {
    expect(solution(7)).toEqual(3);
  });
  // it(`(3) fail test case`, () => {
  //   expect(solution(0)).toEqual(1);
  // });
});
