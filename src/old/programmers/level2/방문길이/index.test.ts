import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_방문길이', () => {
	it('case 1', () => {
		const dirs = 'ULURRDLLU';
		const answer = solution(dirs);
		expect(answer).toEqual(7);
	});
	it('case 2', () => {
		const dirs = 'LULLLLLLU';
		const answer = solution(dirs);
		expect(answer).toEqual(7);
	});
});
