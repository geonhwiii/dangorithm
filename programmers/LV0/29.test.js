const solution = require("./29.문자반복출력하기");

describe("29. 문자반복출력하기", () => {
  it(`(1) "hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.`, () => {
    expect(solution("hello", 3)).toBe("hhheeellllllooo");
  });
});
