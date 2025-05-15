import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_요격시스템', () => {
	it('case 1', () => {
		const targets = [
			[4, 5],
			[4, 8],
			[10, 14],
			[11, 13],
			[5, 12],
			[3, 7],
			[1, 4],
		];
		const answer = solution(targets);
		expect(answer).toEqual(3);
	});
});
