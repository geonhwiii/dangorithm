const solution = require("./39.숨어있는숫자의덧셈(1)");

describe("39. 숨어있는숫자의덧셈", () => {
  it(`(1) "aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.`, () => {
    expect(solution("aAb1B2cC34oOp")).toBe(10);
  });
  it(`(2) "1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.`, () => {
    expect(solution("1a2b3c4d123")).toBe(16);
  });
});
