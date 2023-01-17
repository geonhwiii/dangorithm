const solution = require("./78.컨트롤제트");

describe("78. 컨트롤 제트", () => {
  it(`(1) 10 + 20 + 30 + 40 = 100을 return 합니다.`, () => {
    expect(solution("10 20 30 40")).toEqual(100);
  });
  it(`(2) "10 Z 20 Z 1"에서 10 다음 Z, 20 다음 Z로 10, 20이 지워지고 1만 더하여 1을 return 합니다.`, () => {
    expect(solution("10 Z 20 Z 1")).toEqual(1);
  });
});
