import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("LEVEL_1_기사단원의무기", () => {
	it("case 1", () => {
		const number = 5;
		const limit = 3;
		const power = 2;
		const result = 10;
		const answer = solution(number, limit, power);
		expect(answer).toEqual(result);
	});
	it("case 2", () => {
		const number = 10;
		const limit = 3;
		const power = 2;
		const result = 21;
		const answer = solution(number, limit, power);
		expect(answer).toEqual(result);
	});
});
