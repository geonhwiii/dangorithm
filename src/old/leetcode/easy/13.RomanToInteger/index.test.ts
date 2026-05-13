import { describe, expect, it } from 'vitest';
import { romanToInt } from './index';

describe('EASY_13_RomanToInteger', () => {
	it('case 1', () => {
		const s = 'III';
		const answer = romanToInt(s);
		expect(answer).toEqual(3);
	});
	it('case 2', () => {
		const s = 'LVIII';
		const answer = romanToInt(s);
		expect(answer).toEqual(58);
	});
	it('case 3', () => {
		const s = 'MCMXCIV';
		const answer = romanToInt(s);
		expect(answer).toEqual(1994);
	});
});
