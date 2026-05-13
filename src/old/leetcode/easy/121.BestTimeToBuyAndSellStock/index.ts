export function maxProfit(prices: number[]): number {
	let maxProfit = 0;
	let minPrice = prices[0];
	for (let i = 1; i < prices.length; i++) {
		const price = prices[i];
		minPrice = Math.min(minPrice, price);
		const profit = price - minPrice;
		maxProfit = Math.max(maxProfit, profit);
	}
	return maxProfit;
}
