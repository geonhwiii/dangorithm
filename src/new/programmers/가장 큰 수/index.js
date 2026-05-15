export function solution(numbers) {
  if (numbers.every(n => n === 0)) return "0";

  const sortedNumbers = numbers.sort((a, b) => {
      const aStr = a.toString();
      const bStr = b.toString();
      
      return Number(bStr + aStr) - Number(aStr + bStr)
  });
  
  return sortedNumbers.join("");
}