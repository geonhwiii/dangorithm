import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_더맵게', () => {
	it('case 1', () => {
		const scoville = [1, 2, 3, 9, 10, 12];
		const K = 7;
		const answer = solution(scoville, K);
		expect(answer).toEqual(2);
	});
});
