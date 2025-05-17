import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('example_깊이우선탐색순회', () => {
	it('case 1', () => {
		const graph = [
			['A', 'B'],
			['B', 'C'],
			['C', 'D'],
			['D', 'E'],
		];
		const start = 'A';
		const answer = solution(graph, start);
		expect(answer).toEqual(['A', 'B', 'C', 'D', 'E']);
	});
	it('case 2', () => {
		const graph = [
			['A', 'B'],
			['A', 'C'],
			['B', 'D'],
			['B', 'E'],
			['C', 'F'],
			['E', 'F'],
		];
		const start = 'A';
		const answer = solution(graph, start);
		expect(answer).toEqual(['A', 'B', 'D', 'E', 'F', 'C']);
	});
});
