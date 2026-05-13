export function solution(decimal: number) {
	const stack = [];
	while (decimal > 0) {
		decimal % 2 === 0 ? stack.push(0) : stack.push(1);
		decimal = Math.floor(decimal / 2);
	}
	return Number(stack.reverse().join(''));
}
