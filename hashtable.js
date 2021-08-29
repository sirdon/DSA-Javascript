const hashFunctuon = function (value, max) {
  let val = 0;
  for (let i = 0; i < value.length; i++) {
    val += value.charCodeAt(i);
  }
  return val % max;
};

const HashTable = function () {
  this.storage = [];
  this.storageLimit = 5;
  this.add = function (key, val) {
    let index = hashFunctuon(key, this.storageLimit);
    if (this.storage[index] == undefined) {
      this.storage[index] = [[key, val]];
    } else {
      let added = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] == key) {
          this.storage[index][i][1] = val;
          added = true;
        }
        if (!added) this.storage[index].push([key, val]);
      }
    }
  };
  this.remove = function (key) {
    let index = hashFunctuon(key, this.storageLimit);
    if (this.storage[index].length == 1 && this.storage[index][0][0] == key)
      delete this.storage[index];
    else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] == key) {
          delete this.storage[index][i];
        }
      }
    }
  };
  this.get = function (key) {
    let index = hashFunctuon(key, this.storageLimit);
    if (this.storage[index] == undefined) return undefined;
    else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] == key) {
          return this.storage[index][i][1];
        }
      }
    }
  };
};

let ht = new HashTable();
ht.add("alice", 1234);
ht.add("sam", 789);
ht.add("tom", 456);
ht.add("jack", 741);
console.log(ht.storage);
console.log(ht.get("tom"));
