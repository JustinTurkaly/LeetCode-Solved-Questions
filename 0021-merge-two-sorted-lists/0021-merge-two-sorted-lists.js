/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/*
Input - head of two sorted linked lists
Output - the two lists merged
Constr/Edge - empty input returns itself
Plan - 
- make a dummy node
 - loop over both lists while(l1 and l2 are truthy)
 - if l1.val < l2.val move pointer next pointer to l1 val
 - move l1 pointer to l1.next
 - else move next pointer to l2.val and move curr pointer to l2.next
- if l1 is truthy assign curr.next to l1
- if l2 is truth assign curr.next to l2
- return dummy.next
*/
var mergeTwoLists = function(l1, l2) {
  let curr = new ListNode();
  let dummy = curr;
  
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (l1) {
    curr.next = l1;
  }
  if (l2) {
    curr.next = l2;
  }
  return dummy.next;
};