const solution = require("./28.편지");

describe("28.편지", () => {
  it("(1) message의 글자 수가 15개로 최소 가로 30cm의 편지지가 필요합니다.", () => {
    expect(solution("happy birthday!")).toBe(30);
  });
  it("(2) message의 글자 수가 11개로 최소 가로 22cm의 편지지가 필요합니다. ", () => {
    expect(solution("I love you~")).toBe(22);
  });
});
