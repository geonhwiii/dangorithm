const solution = require("./82.캐릭터의좌표");

describe("82. 캐릭터의좌표", () => {
  it(`(1) [0, 0]에서 왼쪽으로 한 칸 오른쪽으로 한 칸 위로 한 칸 오른쪽으로 두 칸 이동한 좌표는 [2, 1]입니다.`, () => {
    expect(solution(["left", "right", "up", "right", "right"], [11, 11])).toEqual([2, 1]);
  });
  it(`(2) [0, 0]에서 아래로 다섯 칸 이동한 좌표는 [0, -5]이지만 맵의 세로 크기가 9이므로 아래로는 네 칸을 넘어서 이동할 수 없습니다. 따라서 [0, -4]를 return합니다.`, () => {
    expect(solution(["down", "down", "down", "down", "down"], [7, 9])).toEqual([0, -4]);
  });
  it(`(3) fail case 1`, () => {
    expect(solution(["down", "down", "up", "up", "up"], [3, 3])).toEqual([0, 1]);
  });
  it(`(4) fail case 2`, () => {
    expect(solution(["left", "left", "left", "right", "left"], [3, 3])).toEqual([-1, 0]);
  });
});
