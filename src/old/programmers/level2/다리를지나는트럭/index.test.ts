import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_다리를지나는트럭', () => {
	it('case 1', () => {
		const bridge_length = 2;
		const weight = 10;
		const truck_weights = [7, 4, 5, 6];
		const answer = solution(bridge_length, weight, truck_weights);
		expect(answer).toEqual(8);
	});
	it('case 2', () => {
		const bridge_length = 100;
		const weight = 100;
		const truck_weights = [10];
		const answer = solution(bridge_length, weight, truck_weights);
		expect(answer).toEqual(101);
	});
	it('case 3', () => {
		const bridge_length = 100;
		const weight = 100;
		const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
		const answer = solution(bridge_length, weight, truck_weights);
		expect(answer).toEqual(110);
	});
});
