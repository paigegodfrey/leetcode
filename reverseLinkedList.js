// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively.
// Could you implement both?

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const reverseList = list => {
  // define current = 4
  // define originalNext = 3
  // define previous = 5

  // iterate over linked list starting at beginning
    // update originalNext with node.next
    // update node.next with originalPrevious
    // previous = current
    // current = originalNext
}