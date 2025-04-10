/**
 * Definition for a binary tree node.
 */

function isValidBST(root: TreeNode | null): boolean {
  // Base case
  if (!root) return true;
  if (root.left && root.left.val >= root.val) return false;
  if (root.right && root.right.val <= root.val) return false;

  // Walk left and right subtree
  return isValidBST(root.left) && isValidBST(root.right);
}
