import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_게임맵최단거리', () => {
	it('case 1', () => {
		const maps = [
			[1, 0, 1, 1, 1],
			[1, 0, 1, 0, 1],
			[1, 0, 1, 1, 1],
			[1, 1, 1, 0, 1],
			[0, 0, 0, 0, 1],
		];
		const answer = solution(maps);
		expect(answer).toEqual(11);
	});
	it('case 2', () => {
		const maps = [
			[1, 0, 1, 1, 1],
			[1, 0, 1, 0, 1],
			[1, 0, 1, 1, 1],
			[1, 1, 1, 0, 0],
			[0, 0, 0, 0, 1],
		];
		const answer = solution(maps);
		expect(answer).toEqual(-1);
	});
});
