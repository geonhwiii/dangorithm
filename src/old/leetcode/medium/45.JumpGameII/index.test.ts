import { describe, expect, it } from 'vitest';
import { jump } from './index';

describe('MEDIUM_45_JumpGameII', () => {
	it('case 1', () => {
		const nums = [2, 3, 1, 1, 4];
		const answer = jump(nums);
		expect(answer).toEqual(2);
	});
	it('case 2', () => {
		const nums = [2, 3, 0, 1, 4];
		const answer = jump(nums);
		expect(answer).toEqual(2);
	});
});
