/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
Input - head of linked list
Output - the reversed list
Constr/Edge - empty input returns same input
Plan - 
- start prev pointer as null;
- while head is not null
 - store pointer to nextNode in temp var
 - assign head.next pointer to prev
 - assign prev = head
 - assign head to nextNode
- return head
*/
var reverseList = function(head) {
  let prev = null;
  
  while (head !== null) {
    let nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }
  return prev;
};