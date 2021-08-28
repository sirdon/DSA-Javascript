var mySet = function () {
  this.collection = [];
  this.has = function (element) {
    return this.collection.indexOf(element) !== -1;
  };
  this.values = function () {
    return this.collection;
  };
  this.add = function (element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  };
  this.remove = function (element) {
    if (this.has(element)) {
      this.collection.splice(this.collection.indexOf(element), 1);
      return true;
    }
    return false;
  };
  this.union = function (otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((elm) => unionSet.add(elm));
    secondSet.forEach((elm) => unionSet.add(elm));
    return unionSet;
  };
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((elm) => {
      if (!this.has(elm)) intersectionSet.add(elm);
    });
    secondSet.forEach((elm) => {
      if (!this.has(elm)) intersectionSet.add(elm);
    });
    return intersectionSet;
  };
  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((elm) => {
      if (!otherSet.has(elm)) differenceSet.add(elm);
    });
    return differenceSet;
  };
  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every((elm) => otherSet.has(elm));
  };
};

let set1 = new mySet();
let set2 = new mySet();
set1.add(10);
set1.add(20);
set1.add(30);
set1.add(40);

set2.add(10);
set2.add(40);
set2.add(30);
let set = set2.subset(set1);
console.log(set);
