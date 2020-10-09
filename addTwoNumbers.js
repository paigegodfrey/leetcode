// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

class ListNode {
  constructor(val=0) {
    this.val = val;
    this.next = next;
  }
}

// O(n) time
// O(n) space
const addTwoNumbers = (l1, l2) => {
  let l3 = new ListNode;
  let l1curr = l1;
  let l2curr = l2;
  let sum = 0;
  let carry = 0;
  
  while (l1curr || l2curr) {
    sum = l1curr + l2curr + carry;
    l3.next = sum % 10;
    carry = sum < 10 ? 0 : 1;
    l1curr = l1curr.next || 0;
    l2curr = l2curr.next || 0;
  }

  return l3.next;
}