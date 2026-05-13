import { describe, expect, it } from 'vitest';
import { RandomizedSet } from './index';

describe('MEDIUM_380_InsertDelete GetRandomO(1)', () => {
	it('case 1', () => {
		const answer = new RandomizedSet();
		expect(answer.insert(1)).toEqual(true);
		expect(answer.remove(2)).toEqual(false);
		expect(answer.insert(2)).toEqual(true);
		// expect(answer.getRandom()).toEqual(2);
		expect(answer.remove(1)).toEqual(true);
		expect(answer.insert(2)).toEqual(false);
		// expect(answer.getRandom()).toEqual(2);
	});
});
