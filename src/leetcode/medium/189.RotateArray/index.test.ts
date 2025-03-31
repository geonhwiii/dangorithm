import { describe, expect, it } from 'vitest';
import { rotate } from './index';

describe('MEDIUM_189_RotateArray', () => {
	it('case 1', () => {
		const nums = [1, 2, 3, 4, 5, 6, 7];
		const k = 3;
		const answer = rotate(nums, k);
		expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
		expect(answer).toEqual(undefined);
	});
	it('case 2', () => {
		const nums = [-1, -100, 3, 99];
		const k = 2;
		const answer = rotate(nums, k);
		expect(nums).toEqual([3, 99, -1, -100]);
		expect(answer).toEqual(undefined);
	});
});
