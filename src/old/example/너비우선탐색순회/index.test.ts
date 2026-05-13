import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('example_너비우선탐색순회', () => {
	it('case 1', () => {
		const graph = [
			[1, 2],
			[1, 3],
			[2, 4],
			[2, 5],
			[3, 6],
			[3, 7],
			[4, 8],
			[5, 8],
			[6, 9],
			[7, 9],
		];
		const start = 1;
		const answer = solution(graph, start);
		expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});
	it('case 2', () => {
		const graph = [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 0],
		];
		const start = 1;
		const answer = solution(graph, start);
		expect(answer).toEqual([1, 2, 3, 4, 5, 0]);
	});
});
