```markdown
# 25. Times Tables

## The .length Property

Sometimes, we may need to know how many elements are in the array we are using. How can we find this information?

In JavaScript, arrays are special variables that have data properties we can use. One of those properties is called `.length` and produces an integer that tells us how long an array is (or how many elements it has).

```javascript
arrayName.length;

```

*Note: The `.length` property is used with a period, or dot notation.*

The length of an array can also be stored in a separate variable:

```javascript
const testScores = [78, 96, 100, 88, 85, 81, 79];
const numberOfScores = testScores.length;
console.log(numberOfScores); // Output: 7

```

## Looping Over Arrays

One common use for the `.length` property of an array is working with loops (namely, the `for` loop):

```javascript
const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];

for (let i = 0; i < musicNotes.length; i++) {
  console.log(musicNotes[i]);
}

```

Using bracket notation, we can access the next element in the array with the `i` loop variable.

*Note: We named the iterator variable `i` but we can technically give this any name as long as it is consistent throughout the loop.*

We can use arrays with the `while` loop, too:

```javascript
const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];
let counter = 0;

while (counter < musicNotes.length) {
  console.log(musicNotes[counter]);
  counter++;
}

```

*Note: When using arrays with loops, you are likely to encounter the notable "off-by-one" error that happens when you're trying to access an index that doesn't exist or if you begin the index with 1 instead of 0.*

## Instructions

Let's practice using arrays with loops by reciting our times tables!

Many teachers believe that you should memorize a 9 x 9 table (i.e., 9 x 0 through 9 x 9).

Inside an `index.js` file, create the following variables:

1. A `multiple` variable that should be set to an integer above 0.
2. A `numbers` array of integers 0 through 9.

Then, use a `for` loop to iterate through the `numbers` array and multiply a given number by `multiple` each time. Then, print the results to the console.

If you chose 9 for your `multiple`, the output should look like this:

```text
9 x 0 = 0
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81

```

---

## Bonus: Jawaban index.js

```javascript
// index.js

let multiple = 9;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop melalui array numbers menggunakan property .length
for (let i = 0; i < numbers.length; i++) {
  let result = multiple * numbers[i];
  console.log(multiple + " x " + numbers[i] + " = " + result);
}

```

```

```