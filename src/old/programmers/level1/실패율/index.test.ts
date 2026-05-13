import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('example_실패율', () => {
	it('case 1', () => {
		const N = 5;
		const stages = [2, 1, 2, 6, 2, 4, 3, 3];
		const answer = solution(N, stages);
		const result = [3, 4, 2, 1, 5];
		expect(answer).toEqual(result);
	});
	it('case 2', () => {
		const N = 4;
		const stages = [4, 4, 4, 4, 4];
		const answer = solution(N, stages);
		const result = [4, 1, 2, 3];
		expect(answer).toEqual(result);
	});
});
