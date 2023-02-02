/* --- Directions
Implement a Queue data structure using two stacks. *Do not* create an array inside of the 'Queue' class. Queue should implement the methods 'add', 'remove', and 'peek'. For a reminder on what each method does, look back
at the Queue exercise.

--- Examples
    const q = new Queue();
    q.add(1);
    q.add(2);
    q.peek();  // returns 1
    q.remove(); // returns 1
    q.remove(); // returns 2

Algorithm
- create constructor method
  - instantiate first stack
  - instantiate second stack

- create add method with parameter `record`
  - push `record` onto first stack

- create remove method
  - while first stack has records
    - pop record from first stack and push to second stack
  - init `record` to track top record of second stack
  - while second stack has records
    - pop items from second stack and push onto first stack
  - return `record`

- create peek method
  - while first stack has records
    - pop items from first stack and push onto second stack
  - init `record` for top item of second stack to view
  - while second stack has records
    - remove items from second stack and push to first stack
  - return `record` from second stack
*/

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
