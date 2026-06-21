```markdown
# 18. Duck Duck Goose

## Loops

Another popular way we can control the flow of our JavaScript code is with loops!

You'll soon notice that you need to sometimes repeat a particular action numerous times in a program. This may seem fine at first, but that could get overwhelming over time.

For example, what if we wanted to say "Beetlejuice!" exactly three times? We could just write three `console.log()` statements:

```javascript
console.log("Beetlejuice!");
console.log("Beetlejuice!");
console.log("Beetlejuice!");

```

This might not seem bad for 3 statements. But what about 20? Or 100? Or thousands or more?

In programming, loops are used to repeat a block of code based on a certain condition.

How loops work is similar to how cars may circle a roundabout and leave when a certain condition is met (like taking the desired exit).

Let's do a demo!

## Instructions

We're going to learn more about the `while` loop in the next exercise. But for now, we are going to demonstrate how it works by mimicking the classic game of Duck Duck Goose.

In the game, a player walks around a circle of peers to pat each of their heads. They will either say "Duck" or "Goose". If they say "Goose", the player is chased around the circle by the person they patted, to be tagged. After the person tags the player, it is their turn to walk around the circle.

In a file called `duck-duck-goose.js`, let's copy and paste the following:

```javascript
let randomNumber = Math.floor(Math.random() * 10);

while (randomNumber !== 7) {
  console.log("Duck 🦆");
  randomNumber = Math.floor(Math.random() * 10);
}

console.log("Goose! 🦢");

```

Afterward, run this code and observe what's printed to the terminal.

---

## Bonus: Jawaban duck-duck-goose.js

```javascript
// duck-duck-goose.js

let randomNumber = Math.floor(Math.random() * 10);

// Loop akan terus berjalan selama angka acak BUKAN 7
while (randomNumber !== 7) {
  console.log("Duck 🦆");
  
  // Menghasilkan angka acak baru agar loop tidak berjalan tanpa henti (infinite loop)
  randomNumber = Math.floor(Math.random() * 10);
}

// Ketika angka 7 akhirnya didapatkan, loop berhenti dan kode di bawah ini dieksekusi
console.log("Goose! 🦢");

```

```

```