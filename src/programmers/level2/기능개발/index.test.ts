import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_기능개발', () => {
	it('case 1', () => {
		const progresses = [93, 30, 55];
		const speeds = [1, 30, 5];
		const answer = solution(progresses, speeds);
		expect(answer).toEqual([2, 1]);
	});
	it('case 2', () => {
		const progresses = [95, 90, 99, 99, 80, 99];
		const speeds = [1, 1, 1, 1, 1, 1];
		const answer = solution(progresses, speeds);
		expect(answer).toEqual([1, 3, 2]);
	});
});
