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