```markdown
# 13. Good Afternoon

## else Clause

An `else` clause can be optionally added to the end of an `if` statement.

```javascript
if (condition) {
  // Do something
} else {
  // Do something else 
}

```

* If the condition is true, execute the code inside the `if`.
* Else the condition is false, execute the code inside the `else`.

Here's an `if`/`else` statement in action:

```javascript
if (grade > 60) {
  console.log("You passed.");
} else {
  console.log("You failed.");
}

```

* If `grade > 60` is true, then the program prints “You passed.”
* Else, the program prints “You failed.”

## Comparison Operators

Usually, we are comparing two values in a condition. To do so, we use comparison operators:

* `===` strict equal
* `!==` strict not equal
* `>` greater than
* `>=` greater than or equal
* `<` less than
* `<=` less than or equal

We've used `<` and `>` already, these are just more kinds of comparisons that we can make.

Let's go back to the previous Good Morning program and add an `else`!

## Instructions

Go back to your `if` statement from the previous exercise and turn it into an `if`/`else` for the following:

1. If `hour < 12`, then print “Good morning 🌞” and some of your morning routines.
2. Else, print “Good afternoon ☁️” and some of your afternoon rituals.

After you run the code, change `hour`'s value and run it again. Do this a few times to make sure the program is working as intended.

---

## Bonus: Jawaban good-afternoon.js

```javascript
// good-afternoon.js
let hour = 15; // Ganti angka ini untuk mengetes (misal: 9 atau 15)

if (hour < 12) {
  console.log("Good morning 🌞");
  console.log("Morning routine: Wake up, drink water, and code some JavaScript!");
} else {
  console.log("Good afternoon ☁️");
  console.log("Afternoon ritual: Take a walk, grab a coffee, and review code!");
}

```

```

```