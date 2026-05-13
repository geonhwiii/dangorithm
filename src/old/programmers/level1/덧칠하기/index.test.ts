import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_덧칠하기', () => {
	it('case 1', () => {
		const n = 8;
		const m = 4;
		const section = [2, 3, 6];
		const answer = solution(n, m, section);
		expect(answer).toEqual(2);
	});
	it('case 2', () => {
		const n = 5;
		const m = 4;
		const section = [1, 3];
		const answer = solution(n, m, section);
		expect(answer).toEqual(1);
	});
	it('case 3', () => {
		const n = 4;
		const m = 1;
		const section = [1, 2, 3, 4];
		const answer = solution(n, m, section);
		expect(answer).toEqual(4);
	});
});
