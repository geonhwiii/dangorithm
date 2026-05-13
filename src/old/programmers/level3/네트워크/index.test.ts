import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_3_네트워크', () => {
	it('case 1', () => {
		const n = 3;
		const computers = [
			[1, 1, 0],
			[1, 1, 0],
			[0, 0, 1],
		];
		const answer = solution(n, computers);
		expect(answer).toEqual(2);
	});
	it('case 2', () => {
		const n = 3;
		const computers = [
			[1, 1, 0],
			[1, 1, 1],
			[0, 1, 1],
		];
		const answer = solution(n, computers);
		expect(answer).toEqual(1);
	});
});
