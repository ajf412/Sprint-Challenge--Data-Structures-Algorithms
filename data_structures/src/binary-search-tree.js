class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    /* Your code here */
    const result = [];
    const stack = [];
    stack.push(this);

    while(stack.length) {
      const current = stack.pop();
      result.push(current.value)
      if(current.right) {
        stack.push(current.right);
      }
      if(current.left) {
        stack.push(current.left);
      }
      cb(current.value);
    }
    return result;
  }

  breadthFirstForEach(cb) {
    /* Your code here */
    const q = [];
    const result = [];
    q.push(this);

    while (q.length) {
      const current = q.shift();
      result.push(current.value);
      if(current.left) {
        q.push(current.left);
      }
      if(current.right) {
        q.push(current.right);
      }
      cb(current.value);
    }
    return result;
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;

// bst = new BinarySearchTree(5);

// const array = [];
// const cb = x => array.push(x);

// bst.insert(2);
// bst.insert(3);
// bst.insert(7);
// bst.insert(9);
// console.log("DFS: ", bst.depthFirstForEach(cb));
// console.log("BFS: ", bst.breadthFirstForEach(cb));