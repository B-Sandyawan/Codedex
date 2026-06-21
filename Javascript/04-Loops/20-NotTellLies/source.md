```markdown
# 20. Not Tell Lies

## Iterators in Loops

By now, you may have realized that we're updating a variable within our loops. These variables are also known as iterators.

```javascript
let i = initialValue;
while (condition) {
  // Update the i iterator variable
}

```

To "iterate" means to run the code in a loop once. When the `i` iterator variable has reached a value that sets the loop's condition to false, we can successfully exit the loop!

Thus far, we've worked with `while` loops. And while they are useful, we have another to explore.

## for Loops

The `for` loop works a bit differently, for we can determine how many times we want it to run:

```javascript
for (let i = initialValue; condition; updateIterator) {
  // Code here
}

```

Let's break this down:

* First, we define an `i` iterator variable with an `initialValue`.
* Before the first or next iteration, we test the `i` variable in the `condition` statement. If we get `true`, we run the code. Otherwise, we exit the loop.
* After each iteration, we `updateIterator` and change the value of `i`.

As the value of `i` changes, it should eventually cause the `condition` statement to return `false` so we can exit the `for` loop.

Here is what our boiling point program looks like as a `for` loop:

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

```

To recap, we use the following parts in the `for` loop:

* `let i = 1`: initializes an iterator variable.
* `i <= 10`: the conditional statement that is tested before each iteration.
* `i++`: this increments the iterator variable by 1 after each iteration.

*Note: The `++` operator increments a number value by 1. It's the same as writing `i = i + 1`.*

The output would look like:

```text
1
2
3
4
5
6
7
8
9
10

```

Because we want `i` to change each time in the loop, we use the `let` keyword. We use a logical evaluation to determine if the current value of `i` is less than or equal to `10`. After each iteration, we add 1 to the value of `i` (i.e., `i++`).

By the way, you don't always have to print the iterator variable in the loop. For example:

```javascript
for (let i = 1; i <= 3; i++) {
  console.log("Beetlejuice!");
}
// Output:
// Beetlejuice!
// Beetlejuice!
// Beetlejuice!

```

## Instructions

Suppose you got detention and the professor asks you to write a phrase 100 times.

Let's create a program that uses `for` loops to make short work of this!

Use the `for` loop to log the following message to the Console 100 times:

```text
I Must Not Tell Lies

```

*(This is where we begin to see the true power of computing. What takes humans hours can take computer microseconds. 🤯)*

---

## Bonus: Jawaban not-tell-lies.js

```javascript
// not-tell-lies.js

// Loop akan berjalan dari i = 1 hingga i = 100
for (let i = 1; i <= 100; i++) {
  console.log("I Must Not Tell Lies");
}

```

```

```