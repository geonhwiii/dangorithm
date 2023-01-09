const solution = require("./50.약수구하기");

describe("50. 약수구하기", () => {
  it(`(1) 24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.`, () => {
    expect(solution(24)).toEqual([1, 2, 3, 4, 6, 8, 12, 24]);
  });
  it(`(2) 29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.`, () => {
    expect(solution(29)).toEqual([1, 29]);
  });
});
