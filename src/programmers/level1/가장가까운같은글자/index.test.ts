import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("LEVEL_1_가장가까운같은글자", () => {
	it("case 1", () => {
		const s = "banana";
		const result = [-1, -1, -1, 2, 2, 2];
		const answer = solution(s);
		expect(answer).toEqual(result);
	});
	it("case 2", () => {
		const s = "foobar";
		const result = [-1, -1, 1, -1, -1, -1];
		const answer = solution(s);
		expect(answer).toEqual(result);
	});
});
