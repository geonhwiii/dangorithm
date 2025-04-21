import { describe, expect, it } from 'vitest';
import { productExceptSelf } from './index';

describe('MEDIUM_238_ProductofArrayExceptSelf', () => {
	it('case 1', () => {
		const nums = [1, 2, 3, 4];
		const answer = productExceptSelf(nums);
		expect(answer).toEqual([24, 12, 8, 6]);
	});
	it('case 2', () => {
		const nums = [-1, 1, 0, -3, 3];
		const answer = productExceptSelf(nums);
		expect(answer).toEqual([0, 0, 9, 0, 0]);
	});
});
