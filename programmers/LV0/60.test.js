const solution = require("./60.A로B만들기");

describe("60. A로B만들기", () => {
  it(`(1) "olleh"의 순서를 바꾸면 "hello"를 만들 수 있습니다.`, () => {
    expect(solution("olleh", "hello")).toEqual(1);
  });
  it(`(2) "allpe"의 순서를 바꿔도 "apple"을 만들 수 없습니다.`, () => {
    expect(solution("allpe", "apple")).toEqual(0);
  });
});
