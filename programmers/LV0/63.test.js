const solution = require("./63.k의개수");

describe("63. k의개수", () => {
  it(`(1) 10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.`, () => {
    expect(solution(10, 50, 5)).toEqual(5);
  });
  it(`(2) 3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.`, () => {
    expect(solution(3, 10, 2)).toEqual(0);
  });
});
