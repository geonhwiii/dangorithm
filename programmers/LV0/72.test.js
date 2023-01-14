const solution = require("./72.공던지기");

describe("72. 공던지기", () => {
  it(`(1) 1번은 첫 번째로 3번에게 공을 던집니다. 3번은 두 번째로 1번에게 공을 던집니다.`, () => {
    expect(solution([1, 2, 3, 4], 2)).toBe(3);
  });
  it(`(2) case 2`, () => {
    expect(solution([1, 2, 3, 4, 5, 6], 5)).toBe(3);
  });
  it(`(2) case 3`, () => {
    expect(solution([1, 2, 3], 3)).toBe(2);
  });
});
