# AlgoCasts

Companion repo to [The Coding Interview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)

## Notes

In the previous lecture, we showed installing the Jest tool globally into our system. This is no longer necessary with newer versions of Node/npm as Jest can be run without installation using `npx`. So, if you met a bunch of errors when trying to install or run Jest, then, you can just prefix every command with npx:

examples:

`npx jest`

`npx jest fib/test.js --watch`

**Note** - The first time you run Jest with npx it will prompt you to ask if its ok to install the tool. This is not the same thing as a global or local install, it is referring to installing to the npm cache.

`jest fib/test.js -- watch`

Run Jest without installation using:

`npx jest fib/test.js --watch`

`control + c`

### Use `for of` instead of `for loop`

```js
for (let char of str) {

}
```

### Debugger

Debugger Steps

1. Add a `debugger` statement in your function
2. Call the function manually
3. At the terminal run `node inspect index.js`
4. To continue execution of the file, press `c` then `return`
5. To launch a `repl` sessionm type `repl` then `return`
6. To exit the `repl`, press `control + C`

```js
function reverse(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('abcd'); // need function call to use debugger
```

```sh
✗ node inspect index.js
< Debugger listening on ws://127.0.0.1:9229/c8479777-0ceb-4f2b-958a-f7b22e3be0bf
< For help, see: https://nodejs.org/en/docs/inspector
<
< Debugger attached.
<
 ok
Break on start in index.js:34
 32 }
 33
>34 reverse('abcd');
 35
 36 module.exports = reverse;
debug> c # cont / continue
break in index.js:30
 28
 29 function reverse(str) {
>30   debugger;
 31   return str.split('').reduce((rev, char) => char + rev, '');
 32 }
debug> str
REPL2:1
str
^

Uncaught ReferenceError: str is not defined
    at REPL2:1:1
    at Script.runInContext (node:vm:141:12)
    at Object.runInContext (node:vm:297:6)
    at REPLServer.controlEval (node:internal/debugger/inspect_repl:620:25)
    at bound (node:domain:433:15)
    at REPLServer.runBound [as eval] (node:domain:444:12)
    at REPLServer.onLine (node:repl:902:10)
    at REPLServer.emit (node:events:513:28)
    at REPLServer.emit (node:domain:489:12)
    at [_onLine] [as _onLine] (node:internal/readline/interface:425:12)
debug> repl
Press Ctrl+C to leave debug repl
> str
'abcd'
> str.split('').reduce((rev, char) => char + rev, '');
'dcba'
> # `control + c`
debug> c
< Waiting for the debugger to disconnect...
<
debug>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
debug>
```

### Common String Questions

1. What is the most common character in a string?
2. Does string A have the same characters as string B (is it an anagram)?
3. Does the given string have any repeated characters in it?

### RegEx

```js
const word = 'HI THERE!!!!!';
word.replace(/[^\w]/g, '').toLowerCase() // hithere
```

### Recursion Tips

1. Figure out the bare minimum pieces of information to represent your problem.
2. Give reasonable defaults to the bare minimum pieces of info.
3. Check the base case. Is there any work left to do? If not, return.
4. Do some work. Call your function again, making sure the arguments have changed in some fashion.

```js
function printNumber(num, decrement = 1) {
  if (num === 0) return;

  console.log(num)
  printNumber(n - 1, decrement);
}

printNumber(10);
```

### Runtime Complexity

- Runtime complexity describes the performance of an algorithm

- How much more processing power/time is required to run your algorithm if we double the inputs?

Name | Notation | Description
---------|----------|---------
 Constant Time | 1 | Regardless of number of elements, takes the same amount of time
 Logarithmic Time | log(n) | Doubling the number of elements to iterate over doesn't double the amount of work. Searching operations are log(n)
 Linear Time | n | Iterating through all elements in a collection of data. A `for` loop from `0` to `array.length` is an example of linear runtime
 Quasilinear Time | n * log(n) | Doubling the number of elements to iterate over doesn't double the amount of work. Sorting operations are n * log(n)
 Quadratic Time | n^2 | Every element in a collection has to be compared to every other element. 'The handshake problem'
 Exponential Time | 2 ^ n | Adding a single element to a collection requires double the processing power

#### Big O Notation

- O(n) --> Linear
- O(1) --> Constant
- O(n^2) --> Quadratic

#### Identifying Runtime Complexity

Operation | Complexity
---------|----------|
 Iterating with a simple for loop through a single collection | Probably O(n)
 Iterating through half a collection | Still O(n). There are no constants in runtime.
 Iterating through two different collections with separate for loops | O(n + m)
 Two nested for loops iterating over the same collection | O(n^2)
 Two nested for loops iterating over different collections | O(n * m)
 Sorting | O(n * log(n))
 Searching a sorted array | O(log(n))

#### String Reverse

```js
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}
```

abc --> cba
abcdefghijklmnopqrstuvwxyz --> zyxwvutsrqponmlkjihgfedcab

Each additional character = 1 step through 1 loop
This is N or linear runtime.

#### Steps

```js
function steps(num) {
  for (let row = 0; row < num; row += 1) {
    let stair = '';

    for (let column = 0; column < num; column += 1) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}
```

As 'n' increased by one, steps increased n * n. This is N^2 or quadratic runtime.

### Space Complexity

- How much more memory is required by doubling the problem set?

### Memoization

- Store the arguments of each function call along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the function again.

### Data Structures

- Ways of organizing information with optimal runtime complexity for adding or removing records
- JavaScript natively implements several data structures. You will still be asked about 'inferior' data structures.

### Linked Lists

A linked list is an ordered collection of data. The collection contains a number of different nodes. Each node contains some amount of data, along with a reference to the next node.

Head Node --> Data --> Data --> Tail Node --> null

Use two pointers to solve linked list problems:

```js
function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    n -= 1;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
```

### Generators

Example 1

```js
function *numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers();
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next(10)); // { value: 30, done: true }
```

Example 2

```js
function *list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = list();

const numbers = [];
for (let value of generator) {
  numbers.push(value);
}
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
```

Example 3

```js
class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  *printValues() {
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [
  new Tree(2, [new Tree(4)]),
  new Tree(3)
]);

const values = [];
for (let value of tree.printValues()) {
  values.push(value);
}

console.log(values); // [ 1, 2, 4, 3 ]
```

### Trees

Trees consist of nodes. The node of a tree holds some amount of data and a reference to all of its children. A child is any node that is directly underneath a given node. Different nodes on a tree have a parent-child relationship. Nodes at a given level with the same parent are referred to as siblings.

Traversal means to iterate through a tree. There are different orders of traversal.

Breadth-first Traversal

- start at top level
- move from left to right across each level (regardless of whether nodes are siblings of each other)
- examples:
  - corporate leadership hierarchy chart
  - military leadership chart

Depth-first Traversal

- start at very top of the tree
- go down the very left hand side as far as we can go
- from the bottom go back up to the closest parent and then go back down again
- then go back to the top of the tree and repeat with the next side

### Binary Search Trees

- Every node can have at most two children.
- We refer to the children by their relative position to the parent node: left or right
- Values are organized relative to each other
  - Binary Tree does not have this requirement

- Binary Search Tree Structure
  - Parent Node [value | data | key]
    - child nodes [left | right]
    - value > left.value | value < right.value

- Interview Questions
  - How do you *add* new nodes?
    - Ask if we're working with a binary search tree or just a binary tree
  - How do you *check* for a value?
  - How do you *validate* a binary search tree?

### Events

`this.events`
type | - | result
---------|----------|---------
 'click' | --> | [ callback ] [ callback ] [ callback ]
 'hover' | --> | [ callback ]
 'exit' | --> | [ callback ] [ callback ]

### Design Question - Building Twitter

- High Level Notes
  - There is no right answer
  - Every interviewer will expect a different answer
    - Ask the interviewer what to focus on
  - Focus is usually on the data model
    - How would you build out a database?
      - How would you store users?
      - How would you store tweets?
  - Don't mention specific technologies
    - Why would you pick specific technologies?
      - E.g., I would use a web framework on the front end because I would need something that could easily render out a list of tweets and it would have to work well on mobile
    - List out the qualities or attributes of a particular framework
  - Draw stuff
    - make diagrams (e.g., sketch of twitter)
  - Talk
    - Interviewer wants to gauge your ability to communicate about complicated topics

- General Strategy
  - Identify two core features
    - How does a tweet work?
    - How does the user feed work?
  - Possible implementation
    - What does a tweet look like in a DB?
    - How to make the '#topic' and @mention systems?
    - How to implement retweets?
    - How to show interesting tweets at the top of the feed?
  - Identify and address difficulties
    - What's the biggest challenge?
      - E.g., deciding what tweets to show to a user
  - Solutions for scaling
    - E.g., scaling users
      - caching the database
        - User ABC
          - Server
            --> Memory Store
            --> Database
      - Deployment Options
        - User
          - Load Balancer - horizontal scaling for application
            - Server 1
            - Server 2
            - Server 3
              - Database

### Sorting Algorithms

- According to Stephen not high priority interview question regarding actual implementation

Name | Worst Case Runtime | Difficulty
---------|----------|---------
 Bubble Sort | n^2 | easiest
 Selection Sort | n^2 | easier
 Merge Sort | n*log(n) | medium

#### Bubble Sort

- finds the largest element in the array and drags it over to the far right hand side

- Array [10, -30, 97, 0, 5]

- Algorithm
  - iterate over outer loop from idx = 0 to < array's length
    - iterate over inner loop from jdx = 0 to array's length - 1
      - if the element at jdx is greater than jdx + 1
        - swap elements at jdx and jdx + 1

#### Selection Sort

- prove me wrong algorithm

- Algorithm
  - iterate from idx = 0 to less than array's length
    - assume the element at idx is the least in the array, assign idx to `indexOfMin`
    - iterate inner loop from jdx = idx + 1 to end of array
      - see if there is an element with a lower value
        - if there is, record its index
    - if the index of the current element and the index of the lowest element is not the same, swap them

#### Merge Sort

- usually solved with a recursive function

- Merge (Merger) Algorithm
  - create `results` array
  - while there are still elements in both arrays
    - if the first element in the left half is less than the first in the right half
      - `shift` the elements from left into `results` array
    - else
      - `shift` the element from the right into `results` array
  - take everything from the array that still has elements in it and put in `results` array

- Merge Sort Algorithm
  - uses recursion and the `merge` function

Completed Course on 20230209 17:32
