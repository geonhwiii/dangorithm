export function solution(s: string, skip: string, index: number) {
	const 알파벳 = 'abcdefghijklmnopqrstuvwxyz'.split('').filter((char) => !skip.includes(char));
	return [...s]
		.map((char) => {
			const charIndex = 알파벳.indexOf(char);
			return 알파벳[(charIndex + index) % 알파벳.length];
		})
		.join('');
}
