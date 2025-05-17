interface Result {
	uppercase: string;
	lowercase: string;
	capitalize: string;
	replace: string;
}

export function solution(str: string): Result {
	const uppercase = str.toUpperCase();
	const lowercase = str.toLowerCase();
	const capitalize = lowercase.slice(0, 1).toUpperCase() + lowercase.slice(1);
	const replace = str.replaceAll('o', 'x');

	return {
		uppercase,
		lowercase,
		capitalize,
		replace,
	};
}
