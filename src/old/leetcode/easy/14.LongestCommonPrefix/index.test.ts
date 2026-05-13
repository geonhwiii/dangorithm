import { describe, expect, it } from 'vitest';
import { longestCommonPrefix } from './index';

describe('EASY_14_LongestCommonPrefix', () => {
	it('case 1', () => {
		const s = ['flower', 'flow', 'flight'];
		const answer = longestCommonPrefix(s);
		expect(answer).toEqual('fl');
	});
	it('case 2', () => {
		const s = ['dog', 'racecar', 'car'];
		const answer = longestCommonPrefix(s);
		expect(answer).toEqual('');
	});
});
