const solution = require("./75.잘라서배열로저장하기");

describe("75. 잘라서배열로저장하기", () => {
  it(`(1) "abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.`, () => {
    expect(solution("abc1Addfggg4556b", 6)).toEqual([
      "abc1Ad",
      "dfggg4",
      "556b",
    ]);
  });
  it(`(2) "abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 return해야 합니다.`, () => {
    expect(solution("abcdef123", 3)).toEqual(["abc", "def", "123"]);
  });
});
