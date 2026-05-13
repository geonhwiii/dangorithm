import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_할인행사', () => {
	it('case 1', () => {
		const want = ['banana', 'apple', 'rice', 'pork', 'pot'];
		const number = [3, 2, 2, 2, 1];
		const discount = [
			'chicken',
			'apple',
			'apple',
			'banana',
			'rice',
			'apple',
			'pork',
			'banana',
			'pork',
			'rice',
			'pot',
			'banana',
			'apple',
			'banana',
		];
		const answer = solution(want, number, discount);
		expect(answer).toEqual(3);
	});
	it('case 2', () => {
		const want = ['apple'];
		const number = [10];
		const discount = [
			'banana',
			'banana',
			'banana',
			'banana',
			'banana',
			'banana',
			'banana',
			'banana',
			'banana',
			'banana',
		];
		const answer = solution(want, number, discount);
		expect(answer).toEqual(0);
	});
});
