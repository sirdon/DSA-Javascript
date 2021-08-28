var PriorityQueue = function () {
  this.collection = [];

  //enqueue
  this.enqueue = function (element) {
    if (this.isEmpty()) this.collection.push(element);
    else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element < this.collection[i]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) this.collection.push(element);
    }
  };
  this.dequeue = function () {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    return this.collection.shift();
  };
  this.isEmpty = function () {
    return this.collection.length == 0;
  };
  this.front = function () {
    return this.collection[0];
  };
};

let pq = new PriorityQueue();
pq.enqueue(30);
pq.enqueue(100);
pq.enqueue(10);
console.log(pq.front());
