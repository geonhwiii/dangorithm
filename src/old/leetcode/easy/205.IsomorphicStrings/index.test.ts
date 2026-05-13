import { describe, expect, it } from "vitest";
import { isIsomorphic } from "./index";

describe("EASY_125_ValidPalindrome", () => {
  it("case 1", () => {
    const s = "egg";
    const t = "add";
    const answer = isIsomorphic(s, t);
    expect(answer).toEqual(true);
  });
  it("case 2", () => {
    const s = "foo";
    const t = "bar";
    const answer = isIsomorphic(s, t);
    expect(answer).toEqual(false);
  });
  it("case 3", () => {
    const s = "paper";
    const t = "title";
    const answer = isIsomorphic(s, t);
    expect(answer).toEqual(true);
  });
});
