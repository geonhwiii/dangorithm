const solution = require("./80.삼각형의완성조건(2)");

describe("80. 삼각형의완성조건(2)", () => {
  it(`(1) 두 변이 1, 2 인 경우 삼각형을 완성시키려면 나머지 한 변이 2여야 합니다. 따라서 1을 return합니다.`, () => {
    expect(solution([1, 2])).toEqual(1);
  });
  it(`(2) 가장 긴 변이 6인 경우
  될 수 있는 나머지 한 변은 4, 5, 6 로 3개입니다.
  나머지 한 변이 가장 긴 변인 경우
  될 수 있는 한 변은 7, 8 로 2개입니다.
  따라서 3 + 2 = 5를 return합니다.`, () => {
    expect(solution([3, 6])).toEqual(5);
  });
  it(`(3) 가장 긴 변이 11인 경우
  될 수 있는 나머지 한 변은 5, 6, 7, 8, 9, 10, 11 로 7개입니다.
  나머지 한 변이 가장 긴 변인 경우
  될 수 있는 한 변은 12, 13, 14, 15, 16, 17 로 6개입니다.
  따라서 7 + 6 = 13을 return합니다.`, () => {
    expect(solution([11, 7])).toEqual(13);
  });
});
