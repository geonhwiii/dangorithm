const solution = require("./48.인덱스바꾸기");

describe("48. 인덱스바꾸기", () => {
  it(`(1) "hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다. `, () => {
    expect(solution("hello", 1, 2)).toBe("hlelo");
  });
  it(`(2) "I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.`, () => {
    expect(solution("I love you", 3, 6)).toBe("I l veoyou");
  });
  
});
