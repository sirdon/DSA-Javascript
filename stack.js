var Stack = function () {
  this.count = 0;
  this.storage = {};
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };
  this.pop = function () {
    if (this.count == 0) {
      console.log("Stack underflow");
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  this.size = function () {
    return this.count;
  };
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.storage);
