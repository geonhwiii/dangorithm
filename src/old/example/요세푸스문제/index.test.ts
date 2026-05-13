import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('example_요세푸스문제', () => {
	it('case 1', () => {
		const N = 5;
		const K = 2;
		const answer = solution(N, K);
		expect(answer).toEqual(3);
	});
});
