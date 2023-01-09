const solution = require("./47.외계행성의나이");

describe("47. 외계행성의나이", () => {
  it(`(1) age가 23이므로 "cd"를 return합니다. `, () => {
    expect(solution(23)).toBe("cd");
  });
  it(`(2) age가 51이므로 "fb"를 return합니다.`, () => {
    expect(solution(51)).toBe("fb");
  });
  it(`(3) age가 100이므로 "baa"를 return합니다.`, () => {
    expect(solution(100)).toBe("baa");
  });
});
