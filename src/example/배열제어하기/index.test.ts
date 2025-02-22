import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("example_배열제어하기", () => {
	it("case 1", () => {
		const input = [4, 2, 2, 1, 3, 4];
		const result = [4, 3, 2, 1];
		const answer = solution(input);
		expect(answer).toEqual(result);
	});
	it("case 2", () => {
		const input = [2, 1, 1, 3, 2, 5, 4];
		const result = [5, 4, 3, 2, 1];
		const answer = solution(input);
		expect(answer).toEqual(result);
	});
});
