const solution = require("./51.최댓값만들기(2)");

describe("51. 최댓값만들기", () => {
  it(`(1) 두 수의 곱중 최댓값은 -3 * -5 = 15 입니다.`, () => {
    expect(solution([1, 2, -3, 4, -5])).toEqual(15);
  });
  it(`(2) 두 수의 곱중 최댓값은 10 * 24 = 240 입니다.`, () => {
    expect(solution([0, -31, 24, 10, 1, 9])).toEqual(240);
  });
  it(`(3) 두 수의 곱중 최댓값은 20 * 30 = 600 입니다.`, () => {
    expect(solution([10, 20, 30, 5, 5, 20, 5])).toEqual(600);
  });
  it(`(4) fail case`, () => {
    expect(solution([-1, 1])).toEqual(-1);
  });
});
