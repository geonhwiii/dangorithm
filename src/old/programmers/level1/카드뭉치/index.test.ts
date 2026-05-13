import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_카드뭉치', () => {
	it('case 1', () => {
		const cards1 = ['i', 'drink', 'water'];
		const cards2 = ['want', 'to'];
		const goal = ['i', 'want', 'to', 'drink', 'water'];
		const result = 'Yes';
		const answer = solution(cards1, cards2, goal);
		expect(answer).toEqual(result);
	});
	it('case 2', () => {
		const cards1 = ['i', 'water', 'drink'];
		const cards2 = ['want', 'to'];
		const goal = ['i', 'want', 'to', 'drink', 'water'];
		const result = 'No';
		const answer = solution(cards1, cards2, goal);
		expect(answer).toEqual(result);
	});
	it('case 3', () => {
		const cards1 = ['i', 'water'];
		const cards2 = ['drink'];
		const goal = ['i', 'water', 'drink'];
		const result = 'Yes';
		const answer = solution(cards1, cards2, goal);
		expect(answer).toEqual(result);
	});
});
