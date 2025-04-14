// Tortoise and Hare method
export function loopLength(head: ListNode | null): number {
  if (!head) return 0;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // Break out of the loop if the two pointers are at the same node indicating a loop
    if (slow === fast) break;
  }
  // If the two pointers arent at the same node, then there is no loop
  if (slow !== fast) return 0;
  let length = 0;
  // Loop to count the length until we come back to the same node again
  while (fast) {
    length++;
    fast = fast.next;
    if (fast === slow) break;
  }
  return length;
}
