import { describe, expect, it } from "vitest";
import { solution } from "./index"

describe("LEVEL_1_달리기경주", () => {
  it("case 1", () => {
    const mock = ["mumu", "soe", "poe", "kai", "mine"];
    const callings = ["kai", "kai", "mine", "mine"];
    const result = ["mumu", "kai", "mine", "soe", "poe"];
    const answer = solution(mock, callings);
    expect(answer).toEqual(result);
  });
})