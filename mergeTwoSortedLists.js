// Merge two sorted linked lists and return it as a new sorted list.
// The new list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.length) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }
}

// O(N) time
// O(N) space
function mergeTwoSortedLists(l1, l2) {
  let l3 = new LinkedList();
  let l1Current = l1.head;
  let l2Current = l2.head;

  while (l1Current && l2Current) {
    if (l1Current.val < l2Current.val) {
      l3.push(l1Current);
      l1Current = l1Current.next;
    } else {
      l3.push(l2Current);
      l2Current = l2Current.next;
    }
  }

  while (l1Current) {
    l3.push(l1Current);
    l1Current = l1Current.next;
  }

  while (l2Current) {
    l3.push(l2Current);
    l2Current = l2Current.next;
  }

  return l3;
}

// LEETCODE SOLUTION - ListNode class only
// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

// function mergeTwoLists(l1, l2) {
//   // creates reference to pre-head
//   let l3 = new ListNode(-1);
//   let curr3 = l3;

//   while (l1 && l2) {
//     if (l1.val <= l2.val) {
//       curr3.next = l1;
//       l1 = l1.next;
//     } else {
//       curr3.next = l2;
//       l2 = l2.next;
//     }
//     curr3 = curr3.next;
//   }
//   curr3.next = l1 ? l1 : l2;
//   return l3.next;
// }