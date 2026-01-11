import { describe, expect, it } from "vitest";
import { addTwoNumbers, ListNode } from "./index";

// 연결 리스트를 배열로 변환하는 헬퍼 함수
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe("NORMAL_02_AddTwoNumbers", () => {
  it("case 1", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const answer = addTwoNumbers(l1, l2);
    expect(listToArray(answer)).toEqual([7, 0, 8]);
  });
  it("case 2", () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);
    const answer = addTwoNumbers(l1, l2);
    expect(listToArray(answer)).toEqual([0]);
  });
  it("case 3", () => {
    const l1 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
        )
      )
    );
    const l2 = new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9)))
    );
    const answer = addTwoNumbers(l1, l2);
    expect(listToArray(answer)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
