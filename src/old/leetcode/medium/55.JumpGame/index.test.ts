import { describe, expect, it } from 'vitest';
import { canJump } from './index';

describe('MEDIUM_55_JumpGame', () => {
	it('case 1', () => {
		const nums = [2, 3, 1, 1, 4];
		const answer = canJump(nums);
		expect(answer).toEqual(true);
	});
	it('case 2', () => {
		const nums = [3, 2, 1, 0, 4];
		const answer = canJump(nums);
		expect(answer).toEqual(false);
	});
});
