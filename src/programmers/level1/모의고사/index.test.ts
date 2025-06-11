import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("LEVEL_1_모의고사", () => {
  it("case 1", () => {
    const answers = [1, 2, 3, 4, 5];
    const result = solution(answers);
    expect(result).toEqual([1]);
  });
  it("case 2", () => {
    const answers = [1, 3, 2, 4, 2];
    const result = solution(answers);
    expect(result).toEqual([1, 2, 3]);
  });
});
