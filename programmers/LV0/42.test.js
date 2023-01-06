const solution = require("./42.n의배수고르기");

describe("42. n의배수고르기", () => {
  it(`(1) numlist에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.`, () => {
    expect(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])).toEqual([6, 9, 12]);
  });
  it(`(2) numlist에서 5의 배수만을 남긴 [10, 5]를 return합니다.`, () => {
    expect(solution(5, [1, 9, 3, 10, 13, 5])).toEqual([10, 5]);
  });
  it(`(3) numlist에서 12의 배수만을 남긴 [120, 600, 12, 12]를 return합니다. `, () => {
    expect(solution(12, [2, 100, 120, 600, 12, 12])).toEqual([
      120, 600, 12, 12,
    ]);
  });
});
