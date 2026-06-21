```markdown
# 14. pH Levels

## else if

Now you might be wondering, `if`/`else` just gives us two options, but how do we have more than two?

You can add an `else if` section between the `if` and `else` in your control flow! This gives your program more conditions to evaluate, besides just two.

```javascript
if (conditionA) {
  // Do this
} else if (conditionB) {
  // Do this, instead
} else {
  // Do this if none of the above are true
}

```

You don't have to add just one `else if`; you can include as many as you want!

For example, we could apply this to a school grading system:

```javascript
let grade = 93;

if (grade > 90) {
  console.log("A");
} else if (grade > 80) {
  console.log("B");
} else if (grade > 70) {
  console.log("C");
} else if (grade > 60) {
  console.log("D");
} else {
  console.log("F");
}

```

Like the `if` statement, the code in an `else if` statement runs if its condition is true and the code in the rest of the `if`/`else if`/`else` statement is skipped.

Here, because the `grade` is 93, the output would be "A".

## Instructions

In chemistry, pH is a scale used to specify the acidity or basicity of a fluid.

Create a `ph-levels.js` program that checks whether a pH level is basic, acidic, or neutral.

1. First, create a variable called `ph` and give it a value between 0 and 14.
2. Write an `if`/`else if`/`else` statement that:
* If `ph` is greater than 7, output “Basic”.
* Else if `ph` is less than 7, output “Acidic”.
* Else, output “Neutral”.



---

## Bonus: Jawaban ph-levels.js

```javascript
// ph-levels.js
let ph = 8; // Kamu bisa mengganti nilai ini antara 0 dan 14

if (ph > 7) {
  console.log("Basic");
} else if (ph < 7) {
  console.log("Acidic");
} else {
  console.log("Neutral");
}

```

```

```