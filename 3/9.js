function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

function partition(head, x) {
  let beforeHead = new ListNode(0);
  let afterHead = new ListNode(0);
  let before = beforeHead;
  let after = afterHead;
  
  while (head) {
      if (head.val < x) {
          before.next = head;
          before = before.next;
      } else {
          after.next = head;
          after = after.next;
      }
      head = head.next;
  }
  
  after.next = null;
  before.next = afterHead.next;
  
  return beforeHead.next;
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
let head1 = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
let x1 = 3;
let result1 = partition(head1, x1);
console.log(printList(result1)); 

// Приклад 2:
let head2 = new ListNode(2, new ListNode(1));
let x2 = 2;
let result2 = partition(head2, x2);
console.log(printList(result2)); 
