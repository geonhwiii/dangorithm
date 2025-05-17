import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_미로탈출', () => {
	it('case 1', () => {
		const maps = ['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE'];
		const answer = solution(maps);
		expect(answer).toEqual(16);
	});
	it('case 2', () => {
		const maps = ['LOOXS', 'OOOOX', 'OOOOO', 'OOOOO', 'EOOOO'];
		const answer = solution(maps);
		expect(answer).toEqual(-1);
	});
});
