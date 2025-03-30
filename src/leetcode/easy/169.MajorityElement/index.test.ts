import { describe, expect, it } from 'vitest';
import { majorityElement } from './index';

describe('EASY_169_MajorityElement', () => {
	it('case 1', () => {
		const nums = [3, 2, 3];
		const answer = majorityElement(nums);
		expect(answer).toEqual(3);
	});
	it('case 2', () => {
		const nums = [2, 2, 1, 1, 1, 2, 2];
		const answer = majorityElement(nums);
		expect(answer).toEqual(2);
	});
});
