import { describe, expect, it } from 'vitest';
import { removeDuplicates } from './index';

describe('EASY_26_RemoveDuplicatesFromSortedArray', () => {
	it('case 1', () => {
		const nums = [1, 1, 2];
		const answer = removeDuplicates(nums);
		expect(answer).toEqual(2);
	});
	it('case 2', () => {
		const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
		const answer = removeDuplicates(nums);
		expect(answer).toEqual(5);
	});
});
