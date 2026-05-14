export function solution(s){
    let count = 0;
    for (const char of s) {
        if (char === "(") {
            count += 1;
        } else {
            if (count === 0) {
                return false;
            }
            count -= 1;    
        }
    }
    return count === 0;
}