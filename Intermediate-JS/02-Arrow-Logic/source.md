```markdown
# 02. Arrow Logic

## Arrow Functions

Originally, JavaScript functions are written with the `function` keyword:

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Naomi"));
// Output: Hello, Naomi!

```

But with ES6, you have a new way to write functions... with arrows! 🏹

Arrow functions let us define functions in a concise way with its unique `=>` syntax.

Here is the same example, but with arrow function syntax:

```javascript
const greet = (name) => {
  return "Hello, " + name + "!";
};

console.log(greet("Asiqur"));
// Output: Hello, Asiqur!

```

Arrow functions have parameters in parentheses, followed by the `=>` symbol, and then the `{ }` function body. They can be assigned to variables instead of defined with the `function` keyword.

*Note: While you can use `let` with arrow function, `const` may be a better fit since functions shouldn't change after being defined.*

## Implicit Returns

One notable benefit of arrow functions is you can implicitly return your values without using the `return` keyword.

Wait, what?! That's right, you can return a value without the `return` keyword using an arrow function. Check it out:

```javascript
const dadJoke = (text) => (text);

```

Instead of using `{ }` curly brackets after the arrow symbol, we use another set of `( )` parentheses with `text` passed in. When we run this code, JS knows this is returning the value of `text`.

So if we try to log the following:

```javascript
console.log(dadJoke("I used to play piano by ear, but now I use my hands."));

```

The value of `text` should appear on the console like normal!

*P.S. We advise you not to use this line in real life. 😂*

## Instructions

Let's get some reps in with arrow functions! 💪

In the `arrow-logic.js` file on the right, there is a `forceEquation()` function already defined. But it's using the regular `function` syntax.

1. Go ahead and run this code to make sure it works as expected.
2. Then, replace this code with the arrow function syntax we just learned.
3. Finally, rerun the code to make sure the code still works.

---

## Bonus: Jawaban arrow-logic.js

Karena kode awalnya tidak terlihat di sini, mari kita asumsikan bentuk fungsi `forceEquation` pada awalnya seperti ini:

```javascript
// Sebelum (Regular Function):
function forceEquation(mass, acceleration) {
  return mass * acceleration;
}

console.log(forceEquation(10, 9.8));

```

Berikut adalah cara mengubahnya menjadi **Arrow Function**:

```javascript
// arrow-logic.js

// Sesudah (Arrow Function dengan block body):
const forceEquation = (mass, acceleration) => {
  return mass * acceleration;
};

// ATAU menggunakan Implicit Return agar lebih ringkas:
// const forceEquation = (mass, acceleration) => (mass * acceleration);

console.log(forceEquation(10, 9.8)); // Output: 98

```