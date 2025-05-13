import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_최솟값만들기', () => {
	it('case 1', () => {
		const A = [1, 4, 2];
		const B = [5, 4, 4];
		const answer = solution(A, B);
		expect(answer).toEqual(29);
	});
	it('case 2', () => {
		const A = [1, 2];
		const B = [3, 4];
		const answer = solution(A, B);
		expect(answer).toEqual(10);
	});
});
