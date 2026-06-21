```markdown
# 09. BMI

## Exponents

JavaScript can also perform exponentiation such as 2³ or 10².

In written math, we might see an exponent as a superscript number (like above), but typing superscript numbers isn't always easy on modern keyboards. In JavaScript, we use the `**` notation for exponentiation.

```javascript
let score = 0;

score = 2 ** 2;      // score is 4
score = 2 ** 3;      // score is now 8
score = 2 ** 4;      // score is now 16
score = 2 ** 5;      // score is now 32
console.log(score);  // Output: 32

```

*Note: In the order of operations, exponents are calculated before multiplication/division and addition/subtraction.*

## Instructions

The body mass index (BMI) was created by a Belgian mathematician in the 1850s and it's used by health and nutrition professionals to estimate human body fat in certain populations.

It is computed by taking an individual's weight (mass) in kilograms and dividing it by the square of their height in meters.

`bmi = mass / (height  2)`

Create a program that calculates your own BMI.

> **Author's note:** *Psst. BMI is an archaic and oversimplified way to measure personal health. It was created by a mathematician – not a doctor!* 💡

---

## Bonus: Jawaban bmi.js

```javascript
// bmi.js
let mass = 60;      // Weight in kilograms
let height = 1.70;  // Height in meters (170 cm = 1.70 m)

let bmi = mass / (height ** 2);

console.log("BMI kamu adalah: " + bmi);

```

```

```