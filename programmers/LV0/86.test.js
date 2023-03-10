const solution = require('./86.등수매기기');

describe('86. 등수매기기', () => {
  it(`(1) 평균은 각각 75, 70, 55, 65 이므로 등수를 매겨 [1, 2, 4, 3]을 return합니다.`, () => {
    expect(
      solution([
        [80, 70],
        [90, 50],
        [40, 70],
        [50, 80],
      ]),
    ).toEqual([1, 2, 4, 3]);
  });
  it(`(2) 평균은 각각 75, 75, 40, 95, 95, 100, 20 이므로 [4, 4, 6, 2, 2, 1, 7] 을 return합니다. 공동 2등이 두 명, 공동 4등이 2명 이므로 3등과 5등은 없습니다.`, () => {
    expect(
      solution([
        [80, 70],
        [70, 80],
        [30, 50],
        [90, 100],
        [100, 90],
        [100, 100],
        [10, 30],
      ]),
    ).toEqual([4, 4, 6, 2, 2, 1, 7]);
  });
});
