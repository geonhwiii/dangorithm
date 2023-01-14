const solution = require("./73.소인수분해");

describe("73. 소인수분해", () => {
  it(`(1) 12를 소인수분해하면 2 * 2 * 3 입니다. 따라서 [2, 3]을 return합니다.  `, () => {
    expect(solution(12)).toEqual([2, 3]);
  });
  it(`(2) 17은 소수입니다. 따라서 [17]을 return 해야 합니다.`, () => {
    expect(solution(17)).toEqual([17]);
  });
  it(`(3) 420을 소인수분해하면 2 * 2 * 3 * 5 * 7 입니다. 따라서 [2, 3, 5, 7]을 return합니다.`, () => {
    expect(solution(420)).toEqual([2, 3, 5, 7]);
  });
});
