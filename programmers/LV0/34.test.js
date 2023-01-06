const solution = require("./34.옷가게할인받기");

describe("34. 옷가게할인받기", () => {
  it(`(1) 150,000원에서 5%를 할인한 142,500원을 return 합니다.`, () => {
    expect(solution(150000)).toBe(142500);
  });
  it(`(2) 580,000원에서 20%를 할인한 464,000원을 return 합니다.`, () => {
    expect(solution(580000)).toBe(464000);
  });
});
