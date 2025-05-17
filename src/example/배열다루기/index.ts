interface Result {
	evenNumbers: number[];
	multiplesOfThree: number[];
	greaterThanFive: number[];
}

export function solution(arr: number[]): Result {
	const evenNumbers = arr.filter((n) => n % 2 === 0);
	const multiplesOfThree = arr.filter((num) => num % 3 === 0);
	const greaterThanFive = arr.filter((num) => num > 5);

	return {
		evenNumbers,
		multiplesOfThree,
		greaterThanFive,
	};
}
