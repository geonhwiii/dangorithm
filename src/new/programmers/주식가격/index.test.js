import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("PROGRAMMERS_LEVEL_2_주식가격", () => {
  it("case 1", () => {
    const prices = [1, 2, 3, 2, 3];
    const result = [4, 3, 1, 1, 0];
    const answer = solution(prices);
    expect(answer).toEqual(result);
  });
});
