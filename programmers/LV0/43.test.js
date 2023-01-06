const solution = require("./43.대문자와소문자");

describe("43. 대문자와소문자", () => {
  it(`(1) 소문자는 대문자로 대문자는 소문자로 바꾼 "CCCccc"를 return합니다.`, () => {
    expect(solution("cccCCC")).toBe("CCCccc");
  });
  it(`(2) 소문자는 대문자로 대문자는 소문자로 바꾼 "ABcDeFGHij"를 return합니다.`, () => {
    expect(solution("abCdEfghIJ")).toBe("ABcDeFGHij");
  });
});
