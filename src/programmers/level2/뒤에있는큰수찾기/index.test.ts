import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_뒤에있는큰수찾기', () => {
	it('case 1', () => {
		const numbers = [2, 3, 3, 5];
		const answer = solution(numbers);
		expect(answer).toEqual([3, 5, 5, -1]);
	});
	it('case 2', () => {
		const numbers = [9, 1, 5, 3, 6, 2];
		const answer = solution(numbers);
		expect(answer).toEqual([-1, 5, 6, 6, -1, -1]);
	});
});
