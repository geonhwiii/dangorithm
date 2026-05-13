export function solution(phone_book) {
    const phoneBookSet = new Set(phone_book);
    for (const phone of phone_book) {
        for (let len = 1; len < phone.length; len++) {
            const prefix = phone.slice(0, len);
            if (phoneBookSet.has(prefix)) {
                return false;
            }
        }
    }
    return true;
}