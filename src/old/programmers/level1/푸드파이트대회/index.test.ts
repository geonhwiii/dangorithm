import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_푸드파이트대회', () => {
	it('case 1', () => {
		const food = [1, 3, 4, 6];
		const answer = solution(food);
		expect(answer).toEqual('1223330333221');
	});
	it('case 2', () => {
		const food = [1, 7, 1, 2];
		const answer = solution(food);
		expect(answer).toEqual('111303111');
	});
});
