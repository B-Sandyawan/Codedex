```markdown
# 12. Good Morning

## if statement

The conditional we used in the last exercise began with the `if` keyword, which tests a condition for truth and executes the code if it is true.

Here's a simple form of the `if` statement:

```javascript
if (condition) {
  // Do something
}

```

If the condition is true, then the statements within are executed. If the condition is false, then nothing happens and the program continues on after the `if` statement.

For example:

```javascript
if (grade > 60) {
  console.log("You passed!");
}

```

* The `if` keyword is followed by a condition, `grade > 60`, inside a set of parentheses `( )`.
* If the condition is true, the code inside the curly braces `{ }` executes.
* If the condition is false, the code inside the curly braces is skipped.

Now that we understand more about the console and outputting messages, let's try it again!

## Instructions

Create a `good-morning.js` program that prints a message if it's early in the day.

1. Define an `hour` variable and give it the current time of day.
2. Write an `if` statement for the following:
* If `hour < 12`, print “Good morning 🌞” and some of your morning routines.


3. After you run the code, change `hour`'s value and run it again. Do this a few times to make sure the program is working as intended.

---

## Bonus: Jawaban good-morning.js

```javascript
// good-morning.js
let hour = 8; // Ganti angka ini untuk mengetes (misal: 14)

if (hour < 12) {
  console.log("Good morning 🌞");
  console.log("Morning routine: Wake up, drink water, and code some JavaScript!");
}

```

```

```