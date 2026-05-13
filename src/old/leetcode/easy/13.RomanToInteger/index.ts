export function romanToInt(s: string): number {
	let result = 0;
	let i = 0;
	while (i < s.length) {
		const roman = s[i];
		const nextRoman = s[i + 1];
		const value = romanMap.get(roman)!;
		const nextValue = romanMap.get(nextRoman)!;

		if (i + 1 < s.length && value < nextValue) {
			result += nextValue - value;
			i += 2;
		} else {
			result += value;
			i += 1;
		}
	}
	return result;
}

const romanMap = new Map([
	['I', 1],
	['V', 5],
	['X', 10],
	['L', 50],
	['C', 100],
	['D', 500],
	['M', 1000],
]);
