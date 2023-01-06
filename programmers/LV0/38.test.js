const solution = require("./38.제곱수판별하기");

describe("38. 제곱수판별하기", () => {
  it(`(1) 144는 12의 제곱이므로 제곱수입니다. 따라서 1을 return합니다.`, () => {
    expect(solution(144)).toBe(1);
  });
  it(`(2) 976은 제곱수가 아닙니다. 따라서 2를 return합니다.`, () => {
    expect(solution(976)).toBe(2);
  });
});
