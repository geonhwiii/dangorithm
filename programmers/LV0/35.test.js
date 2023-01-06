const solution = require("./35.문자열안에문자열");

describe("35. 문자열안에문자열", () => {
  it(`(1) "ab6CDE443fgh22iJKlmn1o" str1에 str2가 존재하므로 1을 return합니다.`, () => {
    expect(solution("ab6CDE443fgh22iJKlmn1o", "6CD")).toBe(1);
  });
  it(`(2) "ppprrrogrammers" str1에 str2가 없으므로 2를 return합니다.`, () => {
    expect(solution("ppprrrogrammers", "pppp")).toBe(2);
  });
});
