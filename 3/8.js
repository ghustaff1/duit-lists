function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

function reverseKGroup(head, k) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let groupPrev = dummy;
  
  while (true) {
      let kth = groupPrev;
      for (let i = 0; i < k; i++) {
          kth = kth.next;
          if (!kth) return dummy.next;
      }
      
      let groupNext = kth.next;
      let prev = groupPrev.next;
      let curr = prev.next;
      
      for (let i = 1; i < k; i++) {
          prev.next = curr.next;
          curr.next = groupPrev.next;
          groupPrev.next = curr;
          curr = prev.next;
      }
      
      prev.next = groupNext;
      groupPrev = prev;
  }
}

function printList(head) {
  let result = [];
  while (head) {
      result.push(head.val);
      head = head.next;
  }
  return result;
}

// Приклад 1:
let head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let k1 = 2;
let result1 = reverseKGroup(head1, k1);
console.log(printList(result1)); 

// Приклад 2:
let head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let k2 = 3;
let result2 = reverseKGroup(head2, k2);
console.log(printList(result2)); 
