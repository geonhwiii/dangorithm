import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('example_두개뽑아서더하기', () => {
	it('case 1', () => {
		const numbers = [2, 1, 3, 4, 1];
		const result = [2, 3, 4, 5, 6, 7];
		const answer = solution(numbers);
		expect(answer).toEqual(result);
	});
	it('case 2', () => {
		const numbers = [5, 0, 2, 7];
		const result = [2, 5, 7, 9, 12];
		const answer = solution(numbers);
		expect(answer).toEqual(result);
	});
});
