function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export const arrayToLinkedList = (array) => {
  const list = add(null, array[0]);
  let cur = list;
  for (let i = 1; i < array.length; i++) {
    cur = add(cur, array[i]);
  }
  return list;
};

const add = (pre, val) => {
  const node = new ListNode(val);
  if (pre === null) {
    pre = node;
    return node;
  }
  pre.next = node;
  return node;
};

export class Node {
  constructor(val, next, pre) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.pre = pre === undefined ? null : pre;
  }
}

export class DequeLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }
    node.next = this.head;
    this.head.pre = node;
    this.head = node;
    return node;
  }

  removeHead() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.tail = null;
    }
    const t = this.head;
    this.head = t.next;
    if (this.head) this.head.pre = null;
    t.next = null;
    return t;
  }

  addTail(node) {
    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return node;
    }
    this.tail.next = node;
    node.pre = this.tail;
    this.tail = node;
    return node;
  }

  removeTail() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.head = null;
    }
    const t = this.tail;
    this.tail = t.pre;
    if (this.tail) this.tail.next = null;
    t.pre = null;
    return t;
  }

  toArray() {
    const array = [];
    let cur = this.head;
    while (cur !== null) {
      array.push(cur.val);
      cur = cur.next;
    }
    return array;
  }
}
