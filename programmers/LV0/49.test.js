const solution = require("./49.숫자찾기");

describe("49. 숫자찾기", () => {
  it(`(1) 29183에서 1은 3번째에 있습니다.`, () => {
    expect(solution(29183, 1)).toBe(3);
  });
  it(`(2) 232443에서 4는 4번째에 처음 등장합니다.`, () => {
    expect(solution(232443, 4)).toBe(4);
  });
  it(`(3) 123456에 7은 없으므로 -1을 return 합니다.`, () => {
    expect(solution(123456, 7)).toBe(-1);
  });
});
