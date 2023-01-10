const solution = require("./59.모스부호(1)");

describe("59. 모스부호(1)", () => {
  it(`(1) `, () => {
    expect(solution(".... . .-.. .-.. ---")).toEqual("hello");
  });
  it(`(2)`, () => {
    expect(solution(".--. -.-- - .... --- -.")).toEqual("python");
  });
  // it(`(3) fail test case`, () => {
  //   expect(solution(0)).toEqual(1);
  // });
});
