/**
 * * 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
 * * 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
 */

function solution(price) {
  let discount = 1;
  switch (true) {
    case price >= 100_000 && price < 300_000:
      discount = 0.95;
      break;
    case price >= 300_000 && price < 500_000:
      discount = 0.9;
      break;
    case price >= 500_000:
      discount = 0.8;
      break;
  }
  return price * discount;
}

module.exports = solution;
