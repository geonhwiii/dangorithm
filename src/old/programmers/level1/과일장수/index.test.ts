import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_과일장수', () => {
	it('case 1', () => {
		const k = 3;
		const m = 4;
		const score = [1, 2, 3, 1, 2, 3, 1];
		const result = 8;
		const answer = solution(k, m, score);
		expect(answer).toEqual(result);
	});
	it('case 2', () => {
		const k = 4;
		const m = 3;
		const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
		const result = 33;
		const answer = solution(k, m, score);
		expect(answer).toEqual(result);
	});
});
