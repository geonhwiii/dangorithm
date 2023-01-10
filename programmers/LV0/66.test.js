const solution = require("./66.한번만등장한문자");

describe("66. 한번만등장한문자", () => {
  it(`(1) "abcabcadc"에서 하나만 등장하는 문자는 "d"입니다.`, () => {
    expect(solution("abcabcadc")).toEqual("d");
  });
  it(`(2) "abdc"에서 모든 문자가 한 번씩 등장하므로 사전 순으로 정렬한 "abcd"를 return 합니다.`, () => {
    expect(solution("abdc")).toEqual("abcd");
  });
  it(`(3) "hello"에서 한 번씩 등장한 문자는 "heo"이고 이를 사전 순으로 정렬한 "eho"를 return 합니다.`, () => {
    expect(solution("hello")).toEqual("eho");
  });
});
