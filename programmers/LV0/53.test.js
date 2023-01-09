const solution = require("./53.중복된문자제거");

describe("53. 중복된문자제거", () => {
  it(`(1) "people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.`, () => {
    expect(solution("people")).toEqual("peol");
  });
  it(`(2) "We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.`, () => {
    expect(solution("We are the world")).toEqual("We arthwold");
  });
});
