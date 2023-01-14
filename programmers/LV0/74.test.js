const solution = require("./74.영어가싫어요");

describe("74. 영어가싫어요", () => {
  it(`(1) "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.`, () => {
    expect(solution("onetwothreefourfivesixseveneightnine")).toEqual(123456789);
  });
  it(`(2)"onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.`, () => {
    expect(solution("onefourzerosixseven")).toEqual(14067);
  });
});
