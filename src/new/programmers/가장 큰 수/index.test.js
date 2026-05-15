import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("PROGRAMMERS_LEVEL_2_가장 큰 수", () => {
  it("case 1", () => {
    const numbers = [6, 10, 2];
    const result = "6210";
    const answer = solution(numbers);
    expect(answer).toEqual(result);
  });
  it("case 2", () => {
    const numbers = [3, 30, 34, 5, 9];
    const result = "9534330";
    const answer = solution(numbers);
    expect(answer).toEqual(result);
  });
});
