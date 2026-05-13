import { describe, expect, it } from 'vitest';
import { hIndex } from './index';

describe('MEDIUM_274_H-Index', () => {
	it('case 1', () => {
		const citations = [3, 0, 6, 1, 5];
		const answer = hIndex(citations);
		expect(answer).toEqual(3);
	});
	it('case 2', () => {
		const citations = [1, 3, 1];
		const answer = hIndex(citations);
		expect(answer).toEqual(1);
	});
});
