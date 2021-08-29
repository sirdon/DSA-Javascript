const LinkedList = function () {
  this.length = 0;
  this.head = null;
  const Node = function (element) {
    this.element = element;
    this.next = null;
  };
  this.size = function () {
    return this.length;
  };
  this.head = function () {
    return this.head;
  };
  this.addFirst = function (element) {
    let node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  };
  this.addLast = function (element) {
    let node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next != null) curr = curr.next;
      curr.next = node;
    }
  };
  this.add = function (element) {
    this.addLast(element);
  };
  this.addAtPosition = function (element, position) {
    if (position == 0 || this.head == null) this.addFirst(element);
    else if (this.length == position - 1) this.addLast(element);
    else {
      let count = 1,
        curr = this.head;
      while (count != position - 1) {
        curr = curr.next;
        count++;
      }
      node.next = curr.next;
      curr.next = curr;
    }
  };
  this.remove = function (element) {
    let curr = this.head,
      prev = null;
    while (curr != null && curr.element != element) {
      prev = curr;
      curr = curr.next;
    }
    if (curr != null) {
      if (prev == null) this.head = this.head.next;
      else {
        prev.next = prev.next.next;
      }
      return true;
    } else return false;
  };
  this.print = function () {
    let node = this.head;
    while (node != null) {
      console.log(node.element);
      node = node.next;
    }
  };
};

let ll = new LinkedList();
let hd = ll.head;
console.log(ll.head, hd);
ll.add(50);
ll.add(40);
ll.add(70);
ll.add(30);
console.log(ll.head);
ll.print();
