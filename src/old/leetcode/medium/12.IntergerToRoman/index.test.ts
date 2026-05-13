import { describe, expect, it } from 'vitest';
import { intToRoman } from './index';

describe('MEDIUM_12_IntergerToRoman', () => {
	it('case 1', () => {
		const num = 3;
		const answer = intToRoman(num);
		expect(answer).toEqual('III');
	});
	it('case 2', () => {
		const num = 58;
		const answer = intToRoman(num);
		expect(answer).toEqual('LVIII');
	});
	it('case 3', () => {
		const num = 1994;
		const answer = intToRoman(num);
		expect(answer).toEqual('MCMXCIV');
	});
});
