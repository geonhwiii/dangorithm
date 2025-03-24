import { describe, expect, it } from 'vitest';
import { removeElement } from './index';

describe('EASY_27_RemoveElement', () => {
	it('case 1', () => {
		const nums = [3, 2, 2, 3];
		const val = 3;
		const answer = removeElement(nums, val);
		expect(answer).toEqual(2);
	});
	it('case 2', () => {
		const nums = [0, 1, 2, 2, 3, 0, 4, 2];
		const val = 2;
		const answer = removeElement(nums, val);
		expect(answer).toEqual(5);
	});
});
