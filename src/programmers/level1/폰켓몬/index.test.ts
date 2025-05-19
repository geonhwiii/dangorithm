import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_폰켓몬', () => {
	it('case 1', () => {
		const nums = [3, 1, 2, 3];
		const answer = solution(nums);
		expect(answer).toEqual(2);
	});
	it('case 2', () => {
		const nums = [3, 3, 3, 2, 2, 4];
		const answer = solution(nums);
		expect(answer).toEqual(3);
	});
	it('case 3', () => {
		const nums = [3, 3, 3, 2, 2, 2];
		const answer = solution(nums);
		expect(answer).toEqual(2);
	});
});
