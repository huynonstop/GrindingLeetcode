/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

//https://leetcode.com/problems/find-the-winner-of-the-circular-game/discuss/1152705/JavaC%2B%2BPython-4-lines-O(n)-time-O(1)-space
//  Explanation
//  In the end,n = 1, the index of winner index is 0 (base-0)

//  We think with one step back,
//  when n = 2, the index of winner is 0 + k, but we have only n peopple,
//  so the winner index is (0 + k) % 2 (base-0)

//  We think with one more step back,
//  when n = 3, the index of winner is f(2) + k, but we have only n peopple,
//  so the winner index is (f(2) + k) % 3 (base-0)

//  We think with n more step back,
//  the index of winner is f(n-1) + k, but we have only n peopple,
//  so the winner index is (f(n-1) + k) % n (base-0)

//  Done.
function findTheWinner(n, k) {
  let res = 0;
  for (let i = 1; i <= n; ++i) res = (res + k) % i;
  return res + 1;
}

var findTheWinner = function (n, k) {
  const ll = new CircularLinkedList(n);
  while (ll.size > 1) {
    ll.count(k);
  }
  return ll.cur.val;
};

class Node {
  constructor(val, next = null, pre = null) {
    this.val = val;
    this.next = next;
    this.pre = pre;
  }
}

class CircularLinkedList {
  constructor(n) {
    this.size = n;
    let cur = new Node(1);
    this.head = cur;
    for (let i = 2; i <= n; i++) {
      cur.next = new Node(i);
      cur.next.pre = cur;
      cur = cur.next;
    }
    this.head.pre = cur;
    cur.next = this.head;
    this.cur = this.head;
  }

  count(k) {
    k--;
    while (k > 0) {
      this.cur = this.cur.next;
      k--;
    }
    const pre = this.cur.pre;
    const next = this.cur.next;
    pre.next = next;
    next.pre = pre;
    this.cur.next = null;
    this.cur.pre = null;
    this.cur = next;
    this.size--;
  }
}

var findTheWinner = function (n, k) {
  const q = new MyQueue();
  for (let i = 1; i <= n; i++) {
    q.enqueue(i);
  }
  while (q.size !== 1) {
    let x = k;
    while (x > 1) {
      let f = q.front();
      q.dequeue();
      q.enqueue(f);
      x--;
    }
    q.dequeue();
  }
  return q.front();
};

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyQueue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }

  dequeue() {
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return this;
    }
    this.head = this.head.next;
    this.size--;
    return this;
  }

  front() {
    return this.head.val;
  }
}
