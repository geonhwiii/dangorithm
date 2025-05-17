import { describe, it, expect } from 'bun:test';
import { solution } from './index';

describe('example_배열다루기', () => {
	it('case 1', () => {
		const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const result = solution(arr);
		expect(result.evenNumbers).toEqual([2, 4, 6, 8, 10]);
		expect(result.multiplesOfThree).toEqual([3, 6, 9]);
		expect(result.greaterThanFive).toEqual([6, 7, 8, 9, 10]);
	});

	it('case 2', () => {
		const arr = [1, 3, 5, 7, 9];
		const result = solution(arr);
		expect(result.evenNumbers).toEqual([]);
		expect(result.multiplesOfThree).toEqual([3, 9]);
		expect(result.greaterThanFive).toEqual([7, 9]);
	});
});
