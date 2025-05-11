import { describe, expect, it } from 'vitest';
import { strStr } from './index';

describe('EASY_28_FindTheIndexOfTheFirstOccurrenceInAString', () => {
	it('case 1', () => {
		const haystack = 'sadbutsad';
		const needle = 'sad';
		const answer = strStr(haystack, needle);
		expect(answer).toEqual(0);
	});
	it('case 2', () => {
		const haystack = 'leetcode';
		const needle = 'leeto';
		const answer = strStr(haystack, needle);
		expect(answer).toEqual(-1);
	});
});
