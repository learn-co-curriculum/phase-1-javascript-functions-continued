# JavaScript Advanced Functions: Basic Functions Review

## Learning Goals

- Define a function using a function declaration
- Define the term hoisting
- Define a function using a function expression
- Define the term "anonymous function"
- Define an IIFE: Instantly-Invoked Function Expression
- Define the term "function-level scope"
- Define the term "closure"

## Introduction

This lab provides a quick summation of the basics of JavaScript functions. You
should have encountered all these ideas before now, but we're going to give a
quick summary of what the rest of this module assumes you know.

Be sure to take time to experiment or read up on a concept if you're not too
comfortable with the idea.

## Define a Function Using Function Declaration

In JavaScript, the most common way to define functions is with a **function
declaration**:

```js
function razzle() {
  console.log("You've been razzled!");
}
```

The word `razzle` becomes a _pointer_ to some stored, potential,
not-yet-actually run a bit of work (the function). We use the _pointer_ to call
the function. We call the function by adding `()` after the _pointer_.

```
function razzle() {
  console.log("You've been razzled!");
}
razzle()
//=> "You've been razzled!"
```

Interestingly, you can write function declarations _after_ you call them:


```js
razzle() //=> "You've been razzled!"
function razzle() {
  console.log("You've been razzled!");
}
```

Functions can be passed arguments, given default arguments, etc.  Here's a
brief code synopsis:

```js
function razzle(lawyer="Billy", target="'em") {
  console.log(`${lawyer} razzle-dazzles ${target}!`);
}
razzle() //=> Billy razzle-dazzles 'em!
razzle("Methuselah", "T'challah") //=> Methuselah razzle-dazzles T'challah!
```

## Define the Term Hoisting

JavaScript's ability to call functions _before_ they appear in the code is
called hoisting. For hoisting to work, the function must be defined as a
function declaration.

## Define a Function Using a Function Expression

Early in your programming career, you probably learned that programming
languages feature _expressions_: arrangements of constants, variables, and
symbols that, when interpreted by the language, produce a _value_.

```js
1 + 1 //=> 2
"Razzle " + "dazzle!" //=> "Razzle dazzle!"
```

By analogy, if we agree that JavaScript has function _expressions_ that look
like this:

```js
function() {
  console.log("Yet more razzling")
}
```

what is in the variable `fn` at the end of this block of code?

```js
let fn = function() {
  console.log("Yet more razzling")
}
```

This **function expression** evaluates to "stored work." If we ask JavaScript
what it is it says:

```js
let fn = function() {
  console.log("Yet more razzling")
} //=> undefined
fn //=> ƒ () { console.log("Yet more razzling") }
```

Here, Chrome tells us that `fn` points to an un-executed function, a "frozen"
function, a "potential" function, a "recipe" for work. In this example, `fn` is
a _pointer_ to the stored block of work inside of the function (just as we saw
with **function declarations**). But the work is merely potential, it hasn't
been _done_yet. Just as with **function declaration**, we need to invoke or
_call_ the function.

To **do** the work, to turn the potential real, to "un-freeze" the function, we
add `()` to the end, optionally adding arguments.

```js
let fn = function() {
  console.log("Yet more razzling")
} //=> undefined
fn //=> ƒ () { console.log("Yet more razzling") }
fn() //=> Yet more razzling
```

In the following lessons, we'll learn more complex ways of taking a "potential"
function and activating it.

In any case, a **function expression** comes about when we write
`function(){...}` and assign it to a variable. Very importantly, ***function
expressions are not hoisted.*** Since we assign these expressions to variables,
we'd expect things to operate in the same way they do when we assign a `String`
to a variable or the result of an arithmetic expression to a variable. Those
assignments are not hoisted, thus neither is a function expression.

## Define the Term "Anonymous Function"

We also call the expression that produces a function that uses the template
`function(){....}` an "***anonymous function***." In the previous example the
following was the anonymous function:

```js
function() {
  console.log("Yet more razzling")
}
```

Unlike a ***function declaration***, there's no function name in front of the
`()`. Since anonymous means, "without a name," this function is called,
sensibly enough, an anonymous function***.

## Define an IIFE: Instantly-Invoked Function Expression

As a thought experiment, what happens here:

```js
(function(x){ return x + 3 })(2) //=> ???
```

We recognize the first `()` as being those that we might use from arithmetic:

```js
( 3 - 4 ) * 2 // => -2
``

So the first parentheses return the anonymous function, the potential to do
work.  The second `()` are the `()` of function invocation. So we're "invoking"
the function immediately after defining it.

```js
(function(x){ return x + 3 })(2) //=> 5
```

This bit of code is called an IIFE or "Instantly Invoked Function Expression."
This stands to reason since its a function expression that we run immediately.
IIFEs are a good way to make sure that you're grasping the content of this
lesson up to this point.

Interestingly, any variables, functions, `Array`s, etc. that are defined
_inside_ of the function expression's body _can't_ be seen _outside_ of the
IIFE.  It's like opening up a micro-dimension, a bubble-universe, doing all the
work you could ever want to do there, and then closing the space-time rift.
IIFEs are definitely sci-fiction or comic book stuff. 


```js
(
  function(thingToAdd) {
    let base = 3
    return base + thingToAdd
  }
)(2) //=> 5
// console.log(base) //=> Uncaught ReferenceError: base is not defined
```

We'll see some of the practical power of "hiding things" in IIFEs a little
later in this lesson.

> **SYNTAX QUESTION** Some keen-eyed readers might think, why not simply write IIFEs
> like so: `function(x){ return x + 2 }(2) //=> 4`. This does not work. The
> reason has to do with how JavaScript reads functions. JavaScript needs the
> "hint" from the programmer that `function(){...}` forms a unit, thus `()`.

## Define the Term "Function-level Scope"

JavaScript exhibits "Function-level" scope. This means that if a function is
defined _inside another_ function, the inner function has access to all the
parameters (variables passed in) as well as any variables defined in the
function. This is where people really start to get baffled by JavaScript.

```js
function outer(greeting, msg="It's a fine day to") {
  return function(name, lang="Python") { // The "inner" function
    return `${greeting}, ${name}! ${msg} learn ${lang}`
  }
}

outer("Hello")("student", "JavaScript")
//=> "Hello, student! It's a fine day to learn JavaScript"
```

Our "inner" function is a returned **anonymous function**. Because it came into
existence, it inherited the values in `outer`'s parameters `greeting` and
`msg`. When we invoked `outer` we provided the arguments for `greeting` and
left `msg` as the default. `outer` then returned an anonymous function that had
its uses of `greeting` and `msg` set. It was almost as if `outer` returned:


```js
return function(name, lang="Python") { // The "inner" function
  return `Hello, ${name}! It's a fine day to learn ${lang}`
}
```

We invoked this returned or _"inner" function"_ by adding `()` and passing the
arguments `"student"` and `"JavaScript"` which were then loaded into `name` and
`lang` inside the inner function. This filled in the final two values inside of
the template string and effectively returned: 

```js
  return `Hello, student! It's a fine day to learn JavaScript`
//=> "Hello, student! It's a fine day to learn JavaScript"
```

## Define the Term "Closure"

In the previous example, we could call the "inner" function, the **anonymous
function** a "closure." It "encloses" the function-level scope of its parent.
And, like a backpack, it can carry out the knowledge that it saw - _even when
you're out of the parent's scope_.

Recall the IIFE discussion, since what's inside an IIFE can't be seen, if we
wanted to let just tiny bits of information leak back out, we might want to
pass that information back out, through a closure.

_Note: We're also using destructuring assignment, don't forget your ES6 tools!_

```js
let [answer, theBase] = (
  function(thingToAdd) {
    let base = 3
    return [
      function() { return base + thingToAdd },
      function() { return base }
    ]
  }
)(2)
answer() //=> 5
console.log(`The base was ${theBase()}`)
// OUTPUT: The base was 3
```

## Conclusion

In this lesson, we've covered the basics of function declaration, invocation,
and function scope. As a refresher on your skills, we've provided a simple lab
to make sure that you're set for the new information coming up in the rest of
this module.

## Resources

* https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function
