const solution = require("./46.암호해독");

describe("46. 암호해독", () => {
  it(`(1) "dfjardstddetckdaccccdegk" 의 4번째, 8번째, 12번째, 16번째, 20번째, 24번째 글자를 합친 "attack"을 return합니다.`, () => {
    expect(solution("dfjardstddetckdaccccdegk", 4)).toBe("attack");
  });
  it(`(2) "pfqallllabwaoclk" 의 2번째, 4번째, 6번째, 8번째, 10번째, 12번째, 14번째, 16번째 글자를 합친 "fallback"을 return합니다.`, () => {
    expect(solution("pfqallllabwaoclk", 2)).toBe("fallback");
  });
});
