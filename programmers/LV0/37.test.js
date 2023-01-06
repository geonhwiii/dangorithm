const solution = require("./37.자릿수더하기");

describe("37. 자릿수더하기", () => {
  it(`(1) 1 + 2 + 3 + 4 = 10을 return합니다.`, () => {
    expect(solution(1234)).toBe(10);
  });
  it(`(2)9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.`, () => {
    expect(solution(930211)).toBe(16);
  });
});
