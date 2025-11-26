import { describe, expect, it } from 'vitest';
import { threeSum } from './index';

describe('MEDIUM_15_3Sum', () => {
	it('case 1', () => {
		const nums = [-1, 0, 1, 2, -1, -4];
		const answer = threeSum(nums);
		expect(answer).toEqual([
			[-1, -1, 2],
			[-1, 0, 1],
		]);
	});
	it('case 2', () => {
		const nums = [0, 1, 1];
		const answer = threeSum(nums);
		expect(answer).toEqual([]);
	});
	it('case 3', () => {
		const nums = [0, 0, 0];
		const answer = threeSum(nums);
		expect(answer).toEqual([[0, 0, 0]]);
	});
});
