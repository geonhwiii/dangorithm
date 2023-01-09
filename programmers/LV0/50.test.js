const solution = require("./50.369게임");

describe("50. 369게임", () => {
  it(`(1) 3은 3이 1개 있으므로 1을 출력합니다.`, () => {
    expect(solution(3)).toBe(1);
  });
  it(`(2) 29423은 3이 1개, 9가 1개 있으므로 2를 출력합니다.`, () => {
    expect(solution(29423)).toBe(2);
  });
});
