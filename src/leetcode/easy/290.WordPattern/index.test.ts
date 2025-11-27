import { describe, expect, it } from "vitest";
import { wordPattern } from "./index";

describe("EASY_125_ValidPalindrome", () => {
  it("case 1", () => {
    const pattern = "egg";
    const s = "add";
    const answer = wordPattern(pattern, s);
    expect(answer).toEqual(true);
  });
  it("case 2", () => {
    const pattern = "foo";
    const s = "bar";
    const answer = wordPattern(pattern, s);
    expect(answer).toEqual(false);
  });
  it("case 3", () => {
    const pattern = "paper";
    const s = "title";
    const answer = wordPattern(pattern, s);
    expect(answer).toEqual(true);
  });
});
