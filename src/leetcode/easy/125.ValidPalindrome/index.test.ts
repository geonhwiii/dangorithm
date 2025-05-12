import { describe, expect, it } from 'vitest';
import { isSubsequence } from './index';

describe('EASY_125_ValidPalindrome', () => {
	it('case 1', () => {
		const s = 'abc';
		const t = 'ahbgdc';
		const answer = isSubsequence(s, t);
		expect(answer).toEqual(true);
	});
	it('case 2', () => {
		const s = 'axc';
		const t = 'ahbgdc';
		const answer = isSubsequence(s, t);
		expect(answer).toEqual(false);
	});
});
