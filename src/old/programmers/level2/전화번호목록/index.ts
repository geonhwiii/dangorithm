export function solution(phone_book: string[]) {
	const phoneBookSet = new Set([...phone_book]);

	for (const phone of phone_book) {
		for (let i = 1; i < phone.length; i++) {
			const prefix = phone.slice(0, i);
			if (prefix !== phone && phoneBookSet.has(prefix)) {
				return false;
			}
		}
	}

	return true;
}
