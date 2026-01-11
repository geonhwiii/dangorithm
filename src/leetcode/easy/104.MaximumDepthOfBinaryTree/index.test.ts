import { describe, expect, it } from "vitest";
import { maxDepth, TreeNode } from "./index";

// 배열을 TreeNode로 변환하는 헬퍼 함수
// LeetCode 스타일: 레벨 순서(level-order) 배열 표현
function arrayToTreeNode(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift()!;

    // 왼쪽 자식
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i] as number);
      queue.push(node.left);
    }
    i++;

    // 오른쪽 자식
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i] as number);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

describe("EASY_104_MaximumDepthOfBinaryTree", () => {
  it("case 1", () => {
    const root = arrayToTreeNode([3, 9, 20, null, null, 15, 7]);
    const answer = maxDepth(root);
    expect(answer).toEqual(3);
  });
  it("case 2", () => {
    const root = arrayToTreeNode([1, null, 2]);
    const answer = maxDepth(root);
    expect(answer).toEqual(2);
  });
});
