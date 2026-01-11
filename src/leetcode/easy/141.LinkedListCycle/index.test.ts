import { describe, expect, it } from 'vitest';
import { hasCycle } from './index';

describe('EASY_141_LinkedListCycle', () => {
	it('case 1', () => {
		const head = [3, 2, 0, -4];
		const answer = hasCycle(head);
		expect(answer).toEqual(true);
	});
	it('case 2', () => {
		const head = [1, 2];
		const answer = hasCycle(head);
		expect(answer).toEqual(true);
	});
	it('case 3', () => {
		const head = [1];
		const answer = hasCycle(head);
		expect(answer).toEqual(false);
	});
});
