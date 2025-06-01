import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_프로세스', () => {
	it('case 1', () => {
		const priorities = [2, 1, 3, 2];
		const location = 2;
		const answer = solution(priorities, location);
		expect(answer).toEqual(1);
	});
	it('case 2', () => {
		const priorities = [1, 1, 9, 1, 1, 1];
		const location = 0;
		const answer = solution(priorities, location);
		expect(answer).toEqual(5);
	});
});
