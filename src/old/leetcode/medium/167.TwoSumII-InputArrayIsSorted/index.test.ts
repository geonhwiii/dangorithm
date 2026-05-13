import { describe, expect, it } from "vitest";
import { twoSum } from "./index";

describe("MEDIUM_167_TwoSumII-InputArrayIsSorted", () => {
  it("case 1", () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    const answer = twoSum(numbers, target);
    expect(answer).toEqual([1, 2]);
  });
  it("case 2", () => {
    const numbers = [2, 3, 4];
    const target = 6;
    const answer = twoSum(numbers, target);
    expect(answer).toEqual([1, 3]);
  });
  it("case 3", () => {
    const numbers = [-1, 0];
    const target = -1;
    const answer = twoSum(numbers, target);
    expect(answer).toEqual([1, 2]);
  });
});
