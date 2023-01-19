const solution = require('./83.치킨쿠폰');

describe('83. 치킨쿠폰', () => {
  it(`(1) case 1`, () => {
    expect(solution(100)).toEqual(11);
  });
  it(`(2) case 2`, () => {
    expect(solution(1081)).toEqual(120);
  });
});
