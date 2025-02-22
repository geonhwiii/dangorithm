import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("example_배열정렬하기", () => {
	it("case 1", () => {
		const input = [1, -5, 2, 4, 3];
		const result = [-5, 1, 2, 3, 4];
		const answer = solution(input);
		expect(answer).toEqual(result);
	});
	it("case 2", () => {
		const input = [2, 1, 1, 3, 2, 5, 4];
		const result = [1, 1, 2, 2, 3, 4, 5];
		const answer = solution(input);
		expect(answer).toEqual(result);
	});
	it("case 3", () => {
		const input = [6, 1, 7];
		const result = [1, 6, 7];
		const answer = solution(input);
		expect(answer).toEqual(result);
	});
});
