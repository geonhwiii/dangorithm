import { describe, expect, it } from 'vitest';
import { removeDuplicates } from './index';

describe('MEDIUM_80_RemoveDuplicatesFromSortedArrayII', () => {
	it('case 1', () => {
		const nums = [1, 1, 1, 2, 2, 3];
		const answer = removeDuplicates(nums);
		expect(answer).toEqual(5);
	});
	it('case 2', () => {
		const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
		const answer = removeDuplicates(nums);
		expect(answer).toEqual(7);
	});
});
