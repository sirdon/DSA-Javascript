class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node == null) {
      this.root = new Node(data);
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left == null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right == null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else return null;
      };
      return searchTree(node);
    }
  }
  findMin() {
    let curr = this.root;
    while (curr.left !== null) {
      curr = curr.left;
    }
    return curr.data;
  }
  findMax() {
    let curr = this.root;
    while (curr.right !== null) {
      curr = curr.right;
    }
    return curr.data;
  }
  find(data) {
    let curr = this.root;
    while (curr.data !== data) {
      if (curr.data > data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
      if (curr == null) return null;
    }
    return curr;
  }
  isPresent(data) {
    let curr = this.root;
    while (curr) {
      if (curr.data == data) {
        return true;
      }
      if (curr.data > data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) return null;
      if (data == node.data) {
        //node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        //node has left node
        if (node.left == null) {
          return node.right;
        }
        //node has right node
        if (node.right == null) {
          return node.left;
        }
        //node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) tempNode = tempNode.left;
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  inorder() {
    const value = [];
    const order = function (node) {
      if (node == null) return;
      order(node.left);
      value.push(node.data);
      order(node.right);
    };
    order(this.root);
    return value;
  }
  preorder() {
    const value = [];
    const order = function (node) {
      if (node == null) return;
      value.push(node.data);
      order(node.left);
      order(node.right);
    };
    order(this.root);
    return value;
  }
  postorder() {
    const value = [];
    const order = function (node) {
      if (node == null) return;
      order(node.left);
      order(node.right);
      value.push(node.data);
    };
    order(this.root);
    return value;
  }
  levelorder(node = this.root) {
    const value = [];
    const queue = [];
    if (node == null) return value;
    queue.push(node);
    while (queue.length != 0) {
      let size = queue.length;
      let list = [];
      while (size-- != 0) {
        let rem = queue.shift();
        if (rem.left != null) queue.push(rem.left);
        if (rem.right != null) queue.push(rem.right);
        list.push(rem.data);
      }
      value.push(list);
    }
    return value;
  }
  findMinHeight(node = this.root) {
    if (node == null) return -1;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    return Math.min(left, right) + 1;
  }
  findMaxHeight(node = this.root) {
    if (node == null) return -1;
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    return Math.max(left, right) + 1;
  }
  isBalanced(node = this.root) {
    return this.findMinHeight(node) >= this.findMaxHeight(node) - 1;
  }
}

const bst = new BST();
bst.add(4);
bst.add(7);
bst.add(1);
bst.add(17);

console.log(bst.inorder());
console.log(bst.preorder());
console.log(bst.postorder());
console.log(bst.isBalanced());
console.log(bst.findMaxHeight());
console.log(bst.findMinHeight());
console.log(bst.levelorder());
