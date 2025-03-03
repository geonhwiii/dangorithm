export function solution(s: string) {
	const arr = s.split('');
	return arr.map((char, index) => {
		const prevString = arr.slice(0, index);
		const prevIndex = prevString.lastIndexOf(char);
		return prevIndex === -1 ? prevIndex : index - prevIndex;
	});
}

export function solution2(s: string) {
	return [...s].map((char, index) => {
		const prevIndex = s.substring(0, index).lastIndexOf(char);
		return prevIndex === -1 ? prevIndex : index - prevIndex;
	});
}
