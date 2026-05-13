import { describe, expect, it } from 'vitest';
import { maxProfit } from './index';

describe('EASY_121_BestTimeToBuyAndSellStock', () => {
	it('case 1', () => {
		const prices = [7, 1, 5, 3, 6, 4];
		const answer = maxProfit(prices);
		expect(answer).toEqual(5);
	});
	it('case 2', () => {
		const prices = [7, 6, 4, 3, 1];
		const answer = maxProfit(prices);
		expect(answer).toEqual(0);
	});
});
