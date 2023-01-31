const solution = require('./88.저주의숫자3');

describe('88. 저주의숫자3', () => {
  it(`15를 3x 마을의 숫자로 변환하면 25입니다.`, () => {
    expect(solution(15)).toEqual(25);
  });
  // it(`(2) 40을 3x 마을의 숫자로 변환하면 76입니다.`, () => {
  //   expect(solution(40)).toEqual(76);
  // });
});
