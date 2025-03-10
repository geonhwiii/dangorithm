import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_3_베스트앨범', () => {
	it('case 1', () => {
		const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
		const plays = [500, 600, 150, 800, 2500];
		expect(solution(genres, plays)).toEqual([4, 1, 3, 0]);
	});
});
