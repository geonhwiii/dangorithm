import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_예상대진표', () => {
	it('case 1', () => {
		const n = 8;
		const a = 4;
		const b = 7;
		const answer = solution(n, a, b);
		expect(answer).toEqual(3);
	});
});
