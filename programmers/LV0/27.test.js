const solution = require("./27.삼각형의완성조건(1)");

describe("27.삼각형의 완성조건(1)", () => {
  it("(1) 가장 큰 변인 3이 나머지 두 변의 합 3과 같으므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.", () => {
    expect(solution([1, 2, 3])).toBe(2);
  });
  it("(2) 가장 큰 변인 6이 나머지 두 변의 합 5보다 크므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.", () => {
    expect(solution([3, 6, 2])).toBe(2);
  });
  it("(3) 가장 큰 변인 222가 나머지 두 변의 합 271보다 작으므로 삼각형을 완성할 수 있습니다. 따라서 1을 return합니다.", () => {
    expect(solution([199, 72, 222])).toBe(1);
  });
});
