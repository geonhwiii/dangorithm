import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("PROGRAMMERS_LEVEL_2_H-index", () => {
  it("case 1", () => {
    const citations = [3, 0, 6, 1, 5];
    const result = 3;
    const answer = solution(citations);
    expect(answer).toEqual(result);
  });
});
