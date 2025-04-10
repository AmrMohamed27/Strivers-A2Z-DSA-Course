/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) {
    const newNode = new TreeNode(val);
    return newNode;
  }
  walkBST(root, val);
  return root;
}

function walkBST(root: TreeNode, val: number): void {
  if (val <= root.val) {
    if (root.left) {
      // Walk to the left
      walkBST(root.left, val);
    } else {
      // Insert at the left of the current node
      const newNode = new TreeNode(val);
      root.left = newNode;
    }
  } else {
    if (root.right) {
      // Walk to the right
      walkBST(root.right, val);
    } else {
      // Insert at the right of the current node
      const newNode = new TreeNode(val);
      root.right = newNode;
    }
  }
}
