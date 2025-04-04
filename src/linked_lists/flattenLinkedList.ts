export class ListNode<T> {
  public data: T;
  public next?: ListNode<T>;
  public child?: ListNode<T>;

  constructor(data: T, child?: ListNode<T>, next?: ListNode<T>) {
    this.data = data;
    this.next = next;
    this.child = child;
  }
}

export function flattenLinkedList(
  head: ListNode<number> | undefined
): ListNode<number> | undefined {
  if (!head || !head.next) return head;
  let mergedHead = flattenLinkedList(head.next);
  head = merge(head, mergedHead);
  return head;
}

function merge(
  firstHead: ListNode<number> | undefined,
  secondHead: ListNode<number> | undefined
): ListNode<number> | undefined {
  if (!firstHead || !secondHead) return firstHead;
  let iterator1: ListNode<number> | undefined = firstHead;
  let iterator2: ListNode<number> | undefined = secondHead;
  let dummyHead = new ListNode(-1);
  let current = dummyHead;
  while (iterator1 && iterator2) {
    if (iterator1.data <= iterator2.data) {
      current.child = iterator1;
      iterator1 = iterator1.child;
    } else {
      current.child = iterator2;
      iterator2 = iterator2.child;
    }
    current.child.next = undefined;
    current = current.child;
  }
  // Fill in the rest of the list
  while (iterator1) {
    current.child = iterator1;
    iterator1 = iterator1.child;
    current = current.child;
  }
  while (iterator2) {
    current.child = iterator2;
    iterator2 = iterator2.child;
    current = current.child;
  }
  return dummyHead.child;
}
