import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("PROGRAMMERS_LEVEL_2_올바른 괄호", () => {
  it("case 1", () => {
    const s = "()()";
    const result = true;
    const answer = solution(s);
    expect(answer).toEqual(result);
  });
  it("case 2", () => {
    const s = "(())()";
    const result = true;
    const answer = solution(s);
    expect(answer).toEqual(result);
  });
  it("case 3", () => {
    const s = ")()(";
    const result = false;
    const answer = solution(s);
    expect(answer).toEqual(result);
  });
  it("case 4", () => {
    const s = "(()(";
    const result = false;
    const answer = solution(s);
    expect(answer).toEqual(result);
  });
});
