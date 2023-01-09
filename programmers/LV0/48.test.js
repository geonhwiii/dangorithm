const solution = require("./48.가장큰수찾기");

describe("48. 가장큰수찾기", () => {
  it(`(1) 1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.`, () => {
    expect(solution([1, 8, 3])).toEqual([8, 1]);
  });
  it(`(2) 9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.`, () => {
    expect(solution([9, 10, 11, 8])).toEqual([11, 2]);
  });
});
