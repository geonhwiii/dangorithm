export function solution(answers: number[]) {
  const answer = [];
  const answer1 = [1, 2, 3, 4, 5];
  const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const answer1Count = answers.filter(
    (answer, index) => answer === answer1[index % answer1.length]
  ).length;
  const answer2Count = answers.filter(
    (answer, index) => answer === answer2[index % answer2.length]
  ).length;
  const answer3Count = answers.filter(
    (answer, index) => answer === answer3[index % answer3.length]
  ).length;

  const max = Math.max(answer1Count, answer2Count, answer3Count);

  if (answer1Count === max) answer.push(1);
  if (answer2Count === max) answer.push(2);
  if (answer3Count === max) answer.push(3);

  return answer;
}
