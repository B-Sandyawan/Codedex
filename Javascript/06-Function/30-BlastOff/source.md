```markdown
# 30. Blast Off

## Function Syntax

In JavaScript, we use the `function` keyword to define a function with a name and then a set of parentheses:

```javascript
function myFunction() {
  // Code here
}

myFunction();

```

*Note: The names of JavaScript functions are usually in camelCase, just like variables!*

We can write the body of our function inside the curly braces `{ }`. This could include anything we've learned thus far such as variable definitions, loops, and conditional statements.

After we define a function, we can use it or "call it" later in our program by using its name with parentheses.

## return

Another important part of JavaScript functions is the `return` keyword.

For the most part, functions process our code and produce a result that we log to the console.

Here is an example of a `helloWorld()` function that returns a string:

```javascript
function helloWorld() {
  return "Hello, World! 🌎";
}

helloWorld();

```

Calling this function returns the string, but we need to use `console.log()` to make it appear on the console:

```javascript
console.log(helloWorld());
// Output: Hello, World! 🌎

```

## Instructions

Let's practice defining functions by making a countdown timer!

Define a `countdown()` function with the `function` keyword. Then, let's add the following to the function body:

1. A loop that iterates down from that 10 to 1.
2. Inside the loop, print the current number.
3. Outside the loop, return the string "Blast Off! 🚀"

Lastly, call the `countdown()` function and remember to log it to the console!

---

## Bonus: Jawaban blast-off.js

```javascript
// blast-off.js

// Mendefinisikan fungsi countdown
function countdown() {
  // 1. Loop berjalan mundur dari 10 sampai 1
  for (let i = 10; i >= 1; i--) {
    // 2. Mencetak angka saat ini
    console.log(i);
  }
  
  // 3. Mengembalikan string di luar loop
  return "Blast Off! 🚀";
}

// Memanggil fungsi dan mencetak nilai yang dikembalikan (return) ke konsol
console.log(countdown());

```

```

```