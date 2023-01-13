const solution = require("./67.문자열정렬하기(2)");

describe("67. 문자열정렬하기(2)", () => {
  it(`(1) "Bcad"를 모두 소문자로 바꾸면 "bcad"이고 이를 알파벳 순으로 정렬하면 "abcd"입니다.`, () => {
    expect(solution("Bcad")).toBe("abcd");
  });
  it(`(2) "heLLo"를 모두 소문자로 바꾸면 "hello"이고 이를 알파벳 순으로 정렬하면 "ehllo"입니다.`, () => {
    expect(solution("heLLo")).toBe("ehllo");
  });
  it(`(3) "Python"를 모두 소문자로 바꾸면 "python"이고 이를 알파벳 순으로 정렬하면 "hnopty"입니다.`, () => {
    expect(solution("Python")).toBe("hnopty");
  });
});
