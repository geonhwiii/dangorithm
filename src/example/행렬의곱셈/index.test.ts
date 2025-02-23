import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("example_행렬의곱셈", () => {
	it("case 1", () => {
		const arr1 = [
			[1, 4],
			[3, 2],
			[4, 1],
		];
		const arr2 = [
			[3, 3],
			[3, 3],
		];
		const answer = solution(arr1, arr2);
		const result = [
			[15, 15],
			[15, 15],
			[15, 15],
		];
		expect(answer).toEqual(result);
	});
	it("case 2", () => {
		const arr1 = [
			[2, 3, 2],
			[4, 2, 4],
			[3, 1, 4],
		];
		const arr2 = [
			[5, 4, 3],
			[2, 4, 1],
			[3, 1, 1],
		];
		const answer = solution(arr1, arr2);
		const result = [
			[22, 22, 11],
			[36, 28, 18],
			[29, 20, 14],
		];
		expect(answer).toEqual(result);
	});
});
