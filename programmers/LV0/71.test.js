const solution = require("./71.숨어있는숫자의덧셈(2)");

describe("71. 숨어있는숫자의덧셈(2)", () => {
  it(`(1) "aAb1B2cC34oOp"안의 자연수는 1, 2, 34 입니다. 따라서 1 + 2 + 34 = 37 을 return합니다.`, () => {
    expect(solution("aAb1B2cC34oOp")).toBe(37);
  });
  it(`(2) "1a2b3c4d123Z"안의 자연수는 1, 2, 3, 4, 123 입니다. 따라서 1 + 2 + 3 + 4 + 123 = 133 을 return합니다.`, () => {
    expect(solution("1a2b3c4d123Z")).toBe(133);
  });
});
