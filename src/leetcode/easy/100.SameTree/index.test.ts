import { describe, expect, it } from "vitest";
import { isSameTree, TreeNode } from "./index";

describe("EASY_100_SameTree", () => {
  it("case 1", () => {
    const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const answer = isSameTree(tree1, tree2);
    expect(answer).toEqual(true);
  });
  it("case 2", () => {
    const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(4));
    const answer = isSameTree(tree1, tree2);
    expect(answer).toEqual(false);
  });
  it("case 3", () => {
    const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const answer = isSameTree(tree1, tree2);
    expect(answer).toEqual(true);
  });
});
