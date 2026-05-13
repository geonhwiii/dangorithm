import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('example_두개의수로특정값만들기', () => {
	it('case 1', () => {
		const arr = [1, 2, 3, 4, 8];
		const target = 6;
		const answer = solution(arr, target);
		expect(answer).toEqual(true);
	});
	it('case 2', () => {
		const arr = [2, 3, 5, 9];
		const target = 10;
		const answer = solution(arr, target);
		expect(answer).toEqual(false);
	});
});
