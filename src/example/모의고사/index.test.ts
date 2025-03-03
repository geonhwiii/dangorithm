import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('example_모의고사', () => {
	it('case 1', () => {
		const answers = [1, 2, 3, 4, 5];
		const result = [1];
		const answer = solution(answers);
		expect(answer).toEqual(result);
	});
	it('case 2', () => {
		const answers = [1, 3, 2, 4, 2];
		const result = [1, 2, 3];
		const answer = solution(answers);
		expect(answer).toEqual(result);
	});
});
