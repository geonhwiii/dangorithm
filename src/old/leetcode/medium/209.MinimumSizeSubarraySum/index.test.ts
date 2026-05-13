import { describe, expect, it } from "vitest";
import { minSubArrayLen } from "./index";

describe("MEDIUM_209_MinimumSizeSubarraySum", () => {
  it("case 1", () => {
    const target = 7;
    const nums = [2, 3, 1, 2, 4, 3];
    const answer = minSubArrayLen(target, nums);
    expect(answer).toEqual(2);
  });
  it("case 2", () => {
    const target = 4;
    const nums = [1, 4, 4];
    const answer = minSubArrayLen(target, nums);
    expect(answer).toEqual(1);
  });
  it("case 3", () => {
    const target = 11;
    const nums = [1, 1, 1, 1, 1, 1, 1, 1];
    const answer = minSubArrayLen(target, nums);
    expect(answer).toEqual(0);
  });
});
