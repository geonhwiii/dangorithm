const solution = require("./52.배열회전시키기");

describe("52. 배열회전시키기", () => {
  it(`(1) numbers 가 [1, 2, 3]이고 direction이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.`, () => {
    expect(solution([1, 2, 3], "right")).toEqual([3, 1, 2]);
  });
  it(`(2) numbers 가 [4, 455, 6, 4, -1, 45, 6]이고 direction이 "left" 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.`, () => {
    expect(solution([4, 455, 6, 4, -1, 45, 6], "left")).toEqual([
      455, 6, 4, -1, 45, 6, 4,
    ]);
  });
});
