export function solution(numbers: string): number {
  const digits = numbers.split("");
  const uniqueNumbers = new Set<number>();

  const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const generatePermutations = (
    currentDigits: string[],
    remainingDigits: string[]
  ): void => {
    if (currentDigits.length > 0) {
      const number = Number.parseInt(currentDigits.join(""));
      uniqueNumbers.add(number);
    }

    for (let i = 0; i < remainingDigits.length; i++) {
      const nextDigit = remainingDigits[i];
      const newCurrent = [...currentDigits, nextDigit];
      const newRemaining = remainingDigits.filter((_, index) => index !== i);

      generatePermutations(newCurrent, newRemaining);
    }
  };

  generatePermutations([], digits);

  return Array.from(uniqueNumbers).filter(isPrime).length;
}
