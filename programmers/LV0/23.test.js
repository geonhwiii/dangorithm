const solution = require("./23.가위바위보");

describe("23. 가위바위보", () => {
  it("case 1", () => {
    expect(solution("2")).toBe("0");
  });
  it("case 2", () => {
    expect(solution("205")).toBe("052");
  });
});
