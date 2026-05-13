import { describe, expect, it } from 'vitest';
import { maxProfit } from './index';

describe('MEDIUM_122_BestTimeToBuyAndSellStockII', () => {
	it('case 1', () => {
		const prices = [7, 1, 5, 3, 6, 4];
		const answer = maxProfit(prices);
		expect(answer).toEqual(7);
	});
	it('case 2', () => {
		const prices = [1, 2, 3, 4, 5];
		const answer = maxProfit(prices);
		expect(answer).toEqual(4);
	});
	it('case 3', () => {
		const prices = [7, 6, 4, 3, 1];
		const answer = maxProfit(prices);
		expect(answer).toEqual(0);
	});
});
