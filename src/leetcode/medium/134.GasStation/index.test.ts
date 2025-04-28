import { describe, expect, it } from 'vitest';
import { canCompleteCircuit } from './index';

describe('MEDIUM_134_GasStation', () => {
	it('case 1', () => {
		const gas = [1, 2, 3, 4, 5];
		const cost = [3, 4, 5, 1, 2];
		const answer = canCompleteCircuit(gas, cost);
		expect(answer).toEqual(3);
	});
	it('case 2', () => {
		const gas = [2, 3, 4];
		const cost = [3, 4, 3];
		const answer = canCompleteCircuit(gas, cost);
		expect(answer).toEqual(-1);
	});
});
