import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("PROGRAMMERS_LEVEL_1_완주하지 못한 선수", () => {
  it("case 1", () => {
    const participant = ["leo", "kiki", "eden"];
    const completion = ["eden", "kiki"];
    const result = "leo";
    const answer = solution(participant, completion);
    expect(answer).toEqual(result);
  });
  it("case 2", () => {
    const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
    const completion = ["josipa", "filipa", "marina", "nikola"];
    const result = "vinko";
    const answer = solution(participant, completion);
    expect(answer).toEqual(result);
  });
  it("case 3", () => {
    const participant = ["mislav", "stanko", "mislav", "ana"];
    const completion = ["stanko", "ana", "mislav"];
    const result = "mislav";
    const answer = solution(participant, completion);
    expect(answer).toEqual(result);
  });
});
