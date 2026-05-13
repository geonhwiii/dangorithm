import { describe, expect, it } from "vitest";
import { maxArea } from "./index";

describe("MEDIUM_11_ContainerWithMostWater", () => {
  it("case 1", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const answer = maxArea(height);
    expect(answer).toEqual(49);
  });
  it("case 2", () => {
    const height = [1, 1];
    const answer = maxArea(height);
    expect(answer).toEqual(1);
  });
});
