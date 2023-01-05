const solution = require("./21.배열의유사도");

describe("21.배열의 유사도", () => {
  it("case 1", () => {
    expect(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])).toBe(2);
  });
  it("case 2", () => {
    expect(solution(["n", "omg"], ["m", "dot"])).toBe(0);
  });
});
