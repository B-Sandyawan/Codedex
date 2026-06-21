```markdown
# 08. Temperature

## Operators

Computers are incredible at doing math calculations. Now that we know about variables, let's use them with arithmetic operators to perform math calculations.

JavaScript has the following arithmetic operators:
* `+` Addition
* `-` Subtraction
* `*` Multiplication
* `/` Division
* `%` Modulo (returns the remainder)
* `**` Exponent (covered in the next exercise)

We use these operators to write expressions:

```javascript
let score = 0;        // Declare score and initialize it

score = 4 + 3;        // score is now 7
score = 4 - 3;        // score is now 1
score = 4 * 3;        // score is now 12
score = 4 / 3;        // score is now 1.3333
score = 4 % 3;        // score is now 1
console.log(score);   // Output: 1

```

The following code calculates a 20% tip by adding the total price of a pizza and coke, and then multiplying by a decimal number (also known as a float):

```javascript
const pizza = 2.99;
const coke = 0.99;
let total = pizza + coke;
let tip = total * 0.2;
console.log(tip);     // Output: 0.796

```

Another way to write this in one line of code is with parentheses:

```javascript
let tip = (pizza + coke) * 0.2;

```

In JavaScript, anything in parentheses is evaluated first. Therefore, the values of `pizza` and `coke` are added together before the total is multiplied by 0.2.

Let's put these operators to use!

## Instructions

Create a `temperature.js` program that converts a number from Fahrenheit (°F) to Celsius (°C).

1. Google the current temperature of Brooklyn, NY (where Codédex is based) in °F.
2. Use the following formula and write it out in JavaScript:
**Celsius = (Fahrenheit - 32) / 1.8**
3. Print out the converted temperature. 🌡️

---

