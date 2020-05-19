function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function mergeTwoLists(l1, l2) {
  let l3 = new ListNode(-1);
  let curr3 = l3;

  while (l1 && l2) {

    if (l1.val <= l2.val) {
      curr3.next = l1;
      l1 = l1.next;
    } else {
      curr3.next = l2;
      l2 = l2.next;
    }
    curr3 = curr3.next;
  }
  curr3.next = l1 ? l1 : l2;
  return l3.next;
}