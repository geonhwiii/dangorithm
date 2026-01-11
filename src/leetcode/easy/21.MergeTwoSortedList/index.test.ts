import { describe, expect, it } from "vitest";
import { ListNode, mergeTwoLists } from "./index";

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe("EASY_21_MergeTwoSortedList", () => {
  it("case 1", () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const answer = mergeTwoLists(list1, list2);
    expect(listToArray(answer)).toEqual([1, 1, 2, 3, 4, 4]);
  });
  it("case 2", () => {
    const list1 = new ListNode();
    const list2 = new ListNode();
    const answer = mergeTwoLists(list1, list2);
    expect(listToArray(answer)).toEqual([]);
  });
  it("case 3", () => {
    const list1 = new ListNode();
    const list2 = new ListNode(0);
    const answer = mergeTwoLists(list1, list2);
    expect(listToArray(answer)).toEqual([0]);
  });
});
