import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_크레인인형뽑기게임', () => {
	it('case 1', () => {
		const board = [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 3],
			[0, 2, 5, 0, 1],
			[4, 2, 4, 4, 2],
			[3, 5, 1, 3, 1],
		];
		const moves = [1, 5, 3, 5, 1, 2, 1, 4];
		expect(solution(board, moves)).toEqual(4);
	});
});
