import { describe, expect, it } from 'vitest';
import { candy } from './index';

describe('HARD_135_Candy', () => {
	it('case 1', () => {
		const nums = [1, 0, 2];
		const answer = candy(nums);
		expect(answer).toEqual(5);
	});
	it('case 2', () => {
		const nums = [1, 2, 2];
		const answer = candy(nums);
		expect(answer).toEqual(4);
	});
});
