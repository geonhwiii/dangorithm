import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_K번째수', () => {
	it('case 1', () => {
		const array = [1, 5, 2, 6, 3, 7, 4];
		const commands = [
			[2, 5, 3],
			[4, 4, 1],
			[1, 7, 3],
		];
		const answer = solution(array, commands);
		expect(answer).toEqual([5, 6, 3]);
	});
});
