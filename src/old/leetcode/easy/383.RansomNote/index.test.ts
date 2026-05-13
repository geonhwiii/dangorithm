import { describe, expect, it } from 'vitest';
import { canConstruct } from './index';

describe('EASY_383_RansomNote', () => {
	it('case 1', () => {
		const ransomNote = 'a';
		const magazine = 'b';
		const answer = canConstruct(ransomNote, magazine);
		expect(answer).toEqual(false);
	});
	it('case 2', () => {
		const ransomNote = 'aa';
		const magazine = 'ab';
		const answer = canConstruct(ransomNote, magazine);
		expect(answer).toEqual(false);
	});
	it('case 3', () => {
		const ransomNote = 'aa';
		const magazine = 'aab';
		const answer = canConstruct(ransomNote, magazine);
		expect(answer).toEqual(true);
	});
});
