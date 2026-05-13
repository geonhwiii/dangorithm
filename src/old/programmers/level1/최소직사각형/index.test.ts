import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_최소직사각형', () => {
	it('case 1', () => {
		const sizes = [
			[60, 50],
			[30, 70],
			[60, 30],
			[80, 40],
		];
		const result = solution(sizes);
		expect(result).toEqual(4000);
	});
	it('case 2', () => {
		const sizes = [
			[10, 7],
			[12, 3],
			[8, 15],
			[14, 7],
			[5, 15],
		];
		const result = solution(sizes);
		expect(result).toEqual(120);
	});
	it('case 3', () => {
		const sizes = [
			[14, 4],
			[19, 6],
			[6, 16],
			[18, 7],
			[7, 11],
		];
		const result = solution(sizes);
		expect(result).toEqual(133);
	});
});
