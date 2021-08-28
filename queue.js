var Queue = function () {
  this.collection = [];
  //enqueue
  this.enqueue = function (element) {
    this.collection.push(element);
  };
  //dequeue
  this.dequeue = function () {
    return this.collection.shift();
  };
  //size
  this.size = function () {
    return this.collection.length;
  };
  //isEmpty
  this.isEmpty = function () {
    return this.collection.length == 0;
  };
  //front
  this.front = function () {
    return this.collection[0];
  };
  //print
  this.print = function () {
    console.log(this.collection);
  };
};

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(60);
queue.enqueue(50);
queue.enqueue(40);

queue.print();
console.log(queue.dequeue());
queue.print();
