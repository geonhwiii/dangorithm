const solution = require("./81.종이자르기");

describe("81. 종이자르기", () => {
  it(`(1) 가로 2 세로 5인 종이는 가로로 1번 세로로 8번 총 가위질 9번이 필요합니다.`, () => {
    expect(solution(2, 5)).toEqual(9);
  });
  it(`(2) 이미 1 * 1 크기이므로 0을 return 합니다.`, () => {
    expect(solution(1, 1)).toEqual(0);
  });
});
