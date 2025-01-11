import { describe, expect, it } from "vitest";
import { solution } from "./index";

describe("LEVEL_1_둘만의암호", () => {
	it("case 1", () => {
		const s = "aukks";
		const skip = "wbqd";
		const index = 5;
		const answer = solution(s, skip, index);
		expect(answer).toEqual("happy");
	});
});
