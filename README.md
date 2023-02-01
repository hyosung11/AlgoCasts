# AlgoCasts

Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)

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
