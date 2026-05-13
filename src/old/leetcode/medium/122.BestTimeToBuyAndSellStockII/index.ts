export function maxProfit(prices: number[]): number {
	let maximum = 0;
	let prevPrice = prices[0];
	for (let i = 1; i < prices.length; i++) {
		const price = prices[i];
		const profit = price - prevPrice;
		if (profit > 0) {
			maximum += profit;
		}
		prevPrice = price;
	}
	return maximum;
}
