const solution = require("./77.구슬을나누는경우의수");

describe("77. 구슬을나누는경우의수", () => {
  it(`(1) 서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.`, () => {
    expect(solution(3, 2)).toEqual(3);
  });
  it(`(2) 서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.`, () => {
    expect(solution(5, 3)).toEqual(10);
  });
});
