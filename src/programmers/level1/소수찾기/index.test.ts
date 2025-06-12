import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("LEVEL_1_소수찾기", () => {
  it("case 1", () => {
    const numbers = "17";
    const result = solution(numbers);
    expect(result).toEqual(3);
  });
  it("case 2", () => {
    const numbers = "011";
    const result = solution(numbers);
    expect(result).toEqual(2);
  });
});
