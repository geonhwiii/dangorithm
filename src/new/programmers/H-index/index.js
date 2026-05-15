export function solution(citations) {
  let maxH = 0;
  
  const sortedCitations = citations.toSorted((a, b) => b - a);
  
  sortedCitations.forEach((citation, i) => {
    if (citation >= i + 1) {
      maxH = i + 1;
    }
  });

  return maxH;
}