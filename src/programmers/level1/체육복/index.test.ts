import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("LEVEL_1_체육복", () => {
	it("case 1", () => {
		const n = 5;
		const lost = [2, 4];
		const reserve = [1, 3, 5];
		const result = solution(n, lost, reserve);
		expect(result).toEqual(5);
	});
	it("case 2", () => {
		const n = 5;
		const lost = [2, 4];
		const reserve = [3];
		const result = solution(n, lost, reserve);
		expect(result).toEqual(4);
	});
	it("case 3", () => {
		const n = 3;
		const lost = [3];
		const reserve = [1];
		const result = solution(n, lost, reserve);
		expect(result).toEqual(2);
	});
	it("case 4 - sort", () => {
		const n = 5;
		const lost = [4, 2];
		const reserve = [3, 5];
		const result = solution(n, lost, reserve);
		expect(result).toEqual(5);
	});
});
