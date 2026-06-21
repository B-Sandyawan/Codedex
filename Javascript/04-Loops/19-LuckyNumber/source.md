```markdown
# 19. Lucky Number

## while Loops

In the last exercise, we got a demo of the while loop. Let's explore this more!

The `while` loop uses a condition that is either true or false.

```javascript
while (condition) {
  // Code here
}

```

As long as the condition is true, the code in the `while` loop will run. Otherwise, the loop ends when the condition becomes false.

The logic is quite similar to how we used `if` statements. The difference is that instead of executing once if a condition is true, the `while` loop executes it again and again while that condition is true.

## Instructions

Let's use a `while` loop to see what your lucky number could be!

In a `lucky-number.js` file, define a `luckyNumber` and set it to your favorite number. Next, create a `guess` variable that is between 1 and 10, using the `Math.floor()` and `Math.random()` methods:

```javascript
const luckyNumber = 7;
let guess = Math.floor(Math.random() * 10) + 1;

```

Next, create a `while` loop that runs as long as the `guess` and the `luckyNumber` are not equal. Each time, print the incorrect number and then print the `luckyNumber` outside the loop.

The output should look like the following:

```text
Nope, it isn't  5
Nope, it isn't  9
Nope, it isn't  4
My lucky number is 10!

```

---

## Bonus: Jawaban lucky-number.js

```javascript
// lucky-number.js

const luckyNumber = 10; // Mengikuti contoh output
let guess = Math.floor(Math.random() * 10) + 1;

// Loop berjalan selama tebakan TIDAK sama dengan luckyNumber
while (guess !== luckyNumber) {
  console.log("Nope, it isn't " + guess);
  
  // Sangat penting: Hasilkan angka tebakan baru agar tidak terjadi infinite loop!
  guess = Math.floor(Math.random() * 10) + 1;
}

// Berada di luar loop, artinya tebakan sudah sama dengan luckyNumber
console.log("My lucky number is " + luckyNumber + "!");

```

```

```