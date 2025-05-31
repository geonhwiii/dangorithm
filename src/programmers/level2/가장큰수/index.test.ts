import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_가장큰수', () => {
	it('case 1', () => {
		const numbers = [6, 10, 2];
		const answer = solution(numbers);
		expect(answer).toEqual('6210');
	});
	it('case 2', () => {
		const numbers = [3, 30, 34, 5, 9];
		const answer = solution(numbers);
		expect(answer).toEqual('9534330');
	});
});
