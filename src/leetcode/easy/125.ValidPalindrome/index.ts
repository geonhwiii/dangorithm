export function isPalindrome(s: string): boolean {
  // 1. 소문자 변환 및 영숫자 제외 제거
  const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  // 2. 문자열 뒤집기
  const reversedString = normalized.split("").reverse().join("");
  // 3. 문자열 비교
  return normalized === reversedString;
}

export function isPalindrome2(s: string): boolean {
  // 1. 소문자 변환 및 영숫자 제외 제거
  const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  // 2. 투 포인터 사용
  let left = 0;
  let right = normalized.length - 1;
  while (left < right) {
    if (normalized[left] !== normalized[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
