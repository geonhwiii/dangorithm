const solution = require("./62.2차원으로만들기");

describe("62. 2차원으로만들기", () => {
  it(`(1) num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 2 * 4 배열로 변경한 [[1, 2], [3, 4], [5, 6], [7, 8]] 을 return합니다. `, () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]);
  });
  it(`(2) num_list가 [100, 95, 2, 4, 5, 6, 18, 33, 948] 로 길이가 9이고 n이 3이므로 3 * 3 배열로 변경한 [[100, 95, 2], [4, 5, 6], [18, 33, 948]] 을 return합니다.`, () => {
    expect(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)).toEqual([
      [100, 95, 2],
      [4, 5, 6],
      [18, 33, 948],
    ]);
  });
});
