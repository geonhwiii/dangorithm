import { describe, expect, it } from "vitest";
import { isPalindrome } from "./index";

describe("EASY_125_ValidPalindrome", () => {
  it("case 1", () => {
    const s = "A man, a plan, a canal: Panama";
    const answer = isPalindrome(s);
    expect(answer).toEqual(true);
  });
  it("case 2", () => {
    const s = "race a car";
    const answer = isPalindrome(s);
    expect(answer).toEqual(false);
  });
  it("case 3", () => {
    const s = " ";
    const answer = isPalindrome(s);
    expect(answer).toEqual(true);
  });
});
