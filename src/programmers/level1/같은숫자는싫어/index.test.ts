import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_같은숫자는싫어', () => {
	it('case 1', () => {
		const arr = [1, 1, 3, 3, 0, 1, 1];
		const result = solution(arr);
		expect(result).toEqual([1, 3, 0, 1]);
	});
	it('case 2', () => {
		const arr = [4, 4, 4, 3, 3];
		const result = solution(arr);
		expect(result).toEqual([4, 3]);
	});
});
