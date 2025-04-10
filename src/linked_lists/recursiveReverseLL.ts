/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function iterativeReverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  return recurse(head, null);
}

function recurse(current: ListNode, parent: ListNode | null): ListNode | null {
  // Store the next node
  const next = current.next;
  // Make a new node with the current node's value and set the current's parent as its next
  current = new ListNode(current.val, parent);
  // If there is no next for the original current node, return the newly created node
  if (!next) return current;
  // If there is, recurse on the next node with the current node as its parent
  return recurse(next, current);
}
