// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively.
// Could you implement both?

class ListNode {
  constructor(val = 0) {
    this.val = val;
    this.next = null;
  }
}

// O(n) time
// O(1) space
const reverseList = head => {
  if (head == null || head.next == null) return head;

  let current = head;
  let originalNext;
  let originalPrevious;

  while (current !== null) {
    originalNext = current.next;
    current.next = originalPrevious || null;
    originalPrevious = current;
    current = originalNext;
  }

  // very important not to return head
  return originalPrevious;
}