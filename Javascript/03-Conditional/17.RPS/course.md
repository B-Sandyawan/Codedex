```markdown
# 17. Rock Paper Scissors

## Congrats!

```javascript
console.log("Congrats! You've made it. 🎉")

```

Here's a recap of everything we learned so far:

* Conditionals control the order in which the program's code executes.
* `if` statement checks a condition for truth and executes the code if it is.
* `else` executes the code if none of the above is True.
* One or more `else if`s can be added between `if` and `else`.
* Comparison operators compare two values: `===`, `!==`, `>`, `>=`, `<`, `<=`.
* Logical operators combine two or more conditions: `&&`, `||`, `!`.

Here's an `if`/`else if`/`else` statement in action just in case:

```javascript
if (review > 4.5) {
  console.log("Extraordinary");
} else if (review >= 4) {
  console.log("Excellent");
} else if (review >= 3) {
  console.log("Good");
} else {
  console.log("Eh");
}

```

It's time to use what we've learned to build something awesome!

## Instructions

Rock Paper Scissors is a classic game that resonates with folks from around the world. The rules are as follows:

* Rock beats Scissors.
* Scissors beat Paper.
* Paper beats Rock.

Let's use conditionals, the random number generator, and create a program that simulates the game between the player and the computer!

1. Begin with a `player` variable and give it a 0 to represent "Rock", a 1 to represent "Paper", or a 2 to represent "Scissors."
2. Then use `Math.random()` to generate a number between 0 and 2 for another `computer` variable.
3. Then, use conditionals to compare the values of `player` and `computer` to see who wins!

```text
Player picked:      Rock
Computer picked:    Scissors

The player won!

```

After you're finished, feel free to post a screenshot of your code on Twitter by clicking the icon below!

---

## Bonus: Jawaban rock-paper-scissors.js

```javascript
// rock-paper-scissors.js

// 0 = Rock, 1 = Paper, 2 = Scissors
let player = 0; // Pemain memilih Rock
let computer = Math.floor(Math.random() * 3); // Komputer memilih secara acak 0, 1, atau 2

// Fungsi bantuan untuk menerjemahkan angka menjadi teks
let playerChoice = "";
let computerChoice = "";

if (player === 0) { playerChoice = "Rock"; }
else if (player === 1) { playerChoice = "Paper"; }
else if (player === 2) { playerChoice = "Scissors"; }

if (computer === 0) { computerChoice = "Rock"; }
else if (computer === 1) { computerChoice = "Paper"; }
else if (computer === 2) { computerChoice = "Scissors"; }

console.log("Player picked:      " + playerChoice);
console.log("Computer picked:    " + computerChoice);
console.log(""); // Baris kosong

// Logika pemenang
if (player === computer) {
  console.log("It's a tie!");
} else if (
  (player === 0 && computer === 2) || 
  (player === 1 && computer === 0) || 
  (player === 2 && computer === 1)
) {
  console.log("The player won!");
} else {
  console.log("The computer won!");
}

```

```

```