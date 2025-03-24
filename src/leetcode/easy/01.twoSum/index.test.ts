import { describe, expect, it } from 'vitest';
import { twoSum } from './index';

describe('EASY_01_twoSum', () => {
	it('case 1', () => {
		const nums = [2, 7, 11, 15];
		const target = 9;
		const answer = twoSum(nums, target);
		expect(answer).toEqual([0, 1]);
	});
	it('case 2', () => {
		const nums = [3, 2, 4];
		const target = 6;
		const answer = twoSum(nums, target);
		expect(answer).toEqual([1, 2]);
	});
});
