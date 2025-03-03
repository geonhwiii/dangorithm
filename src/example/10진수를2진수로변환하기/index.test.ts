import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('example_10진수를2진수로변환하기', () => {
	it('case 1', () => {
		const decimal = 10;
		const answer = solution(decimal);
		expect(answer).toEqual(1010);
	});
	it('case 2', () => {
		const decimal = 27;
		const answer = solution(decimal);
		expect(answer).toEqual(11011);
	});
	it('case 3', () => {
		const decimal = 12345;
		const answer = solution(decimal);
		expect(answer).toEqual(11000000111001);
	});
});
