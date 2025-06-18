import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_숫자변환하기', () => {
	it('case 1', () => {
		const x = 10;
		const y = 40;
		const n = 5;
		const answer = solution(x, y, n);
		expect(answer).toEqual(2);
	});
	it('case 2', () => {
		const x = 10;
		const y = 40;
		const n = 30;
		const answer = solution(x, y, n);
		expect(answer).toEqual(1);
	});
	it('case 3', () => {
		const x = 2;
		const y = 5;
		const n = 4;
		const answer = solution(x, y, n);
		expect(answer).toEqual(-1);
	});
});
