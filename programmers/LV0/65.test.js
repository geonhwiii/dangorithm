const solution = require("./65.진료순서정하기");

describe("65. 진료순서정하기", () => {
  it(`(1) emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.`, () => {
    expect(solution([3, 76, 24])).toEqual([3, 1, 2]);
  });
  it(`(2) emergency가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.`, () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7])).toEqual([7, 6, 5, 4, 3, 2, 1]);
  });
  it(`(3) emergency가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.`, () => {
    expect(solution([30, 10, 23, 6, 100])).toEqual([2, 4, 3, 5, 1]);
  });
});
