const solution = require("./70.이진수더하기");

describe("70. 이진수더하기", () => {
  it(`(1) 10 + 11 = 101 이므로 "101" 을 return합니다.`, () => {
    expect(solution("10", "11")).toBe("101");
  });
  it(`(2) 1001 + 1111 = 11000 이므로 "11000"을 return합니다.`, () => {
    expect(solution("1001", "1111")).toBe("11000");
  });
});
