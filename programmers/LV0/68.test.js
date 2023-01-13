const solution = require("./68.합성수찾기");

describe("68. 합성수찾기", () => {
  it(`(1) 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.`, () => {
    expect(solution(10)).toBe(5);
  });
  it(`(2) 15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.`, () => {
    expect(solution(15)).toBe(8);
  });
});
