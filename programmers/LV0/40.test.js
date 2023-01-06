const solution = require("./40.모음제거");

describe("40. 모음제거", () => {
  it(`(1) "bus"에서 모음 u를 제거한 "bs"를 return합니다.`, () => {
    expect(solution("bus")).toBe("bs");
  });
  it(`(2) "nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다.`, () => {
    expect(solution("nice to meet you")).toBe("nc t mt y");
  });
});
