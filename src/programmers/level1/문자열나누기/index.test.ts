import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_문자열나누기', () => {
	it('case 1', () => {
		const s = 'banana';
		const result = solution(s);
		expect(result).toEqual(3);
	});
	it('case 2', () => {
		const s = 'abracadabra';
		const result = solution(s);
		expect(result).toEqual(6);
	});
	it('case 3', () => {
		const s = 'aaabbaccccabba';
		const result = solution(s);
		expect(result).toEqual(3);
	});
});
