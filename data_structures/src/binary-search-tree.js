class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    const result = [];
    const stack = [];
    // Go to root node
    let current = Object.assign({}, this);
    let previous = {
      value: 0,
      left: null,
      right: null,
    }
    let finished = false;
    let checkedLeft = false;
    let checkedRight = false;

    // while there is a stack, do all this
    do{
      // check if left exists
      if(current.left) {
        //if yes left, .push this node to STACK and make left node current node, recurse for left check
        previous = Object.assign({}, current);
        previous.left = null;
        stack.push(previous);
        current = Object.assign({}, current.left);
      } else if(current.right) { //if no left, check if right exists
        //if yes right, .push this node to STACK and make right node current node
        previous = Object.assign({}, current);
        previous.right = null;
        stack.push(previous);
        current = Object.assign({}, current.right);
      } else {
        //if no right, .push current node to RESULT and check for node in stack
        if(result.indexOf(current.value) !== -1) {
          finished = true;
          break;
        }
        result.push(current.value)
        if(stack.length > 0) {
          //if yes node in stack, .pop stack node to current node
          current = stack.pop();
        }
      }
    } while (finished === false);
    
    //if no node in stack, return RESULT.
    return result;
  }

  breadthFirstForEach(cb) {
    /* Your code here */

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

bst = new BinarySearchTree(5);

const array = [];
const cb = x => array.push(x);

bst.insert(2);
bst.insert(3);
bst.insert(7);
bst.insert(9);
console.log("Full call: ", bst.depthFirstForEach(cb));