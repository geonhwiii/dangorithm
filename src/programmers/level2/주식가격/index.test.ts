import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_주식가격', () => {
	it('case 1', () => {
		const prices = [1, 2, 3, 2, 3];
		const answer = solution(prices);
		expect(answer).toEqual([4, 3, 1, 1, 0]);
	});
});
