```markdown
# 11. Coin Flip

## Control Flow

Every JavaScript program we've worked with thus far executes one line at a time, from top to bottom. Each time we run the program, the same result is logged to the Console window.

But what if we want our program to do different things based on different conditions?

This can be done with control flow statements!

It's as if you are going down a road and there's a fork ahead with a sign that reads:
“Albuquerque: left. Phoenix: right.”

In the “Conditionals” chapter, we will explore how programs “make decisions” by evaluating different conditions and introduce logic into our code!

## Instructions

Before we dive into how conditional statements are made in the next exercise, let's do a demo using a coin flip!

Create a `coin.js` program and type in the following:

```javascript
let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

```

*Note: We will learn about `Math.random()` later in the chapter.*

All you need to know is that this program simulates a coin toss:

* ≈ 50% of the time, it's "Heads".
* ≈ 50% of the time, it's "Tails".

Run the program 5 times to get a taste of the conditionals!

How many times did we get Heads? How many for Tails?

---

## Bonus: Jawaban coin.js

```javascript
// coin.js
let num = Math.random();

// Mensimulasikan lemparan koin
if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

/* Catatan: 
  Jalankan file ini 5 kali di terminal (menggunakan perintah `node coin.js`).
  Kamu akan melihat outputnya berubah-ubah secara acak antara Heads dan Tails!
*/

```

```

```