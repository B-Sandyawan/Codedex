```markdown
# 15. Magic 8 Ball

## Math.random()

Remember the Coin Flip program in the beginning of the chapter? Let's learn how we can use a random number generator to add some more fun to our program.

In JavaScript, the `Math.random()` method returns a random decimal number between 0 and 1.

Suppose we print out three of them, like so:

```javascript
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

```

The output would have three different numbers and that look something like:

```text
0.0236966238022709
0.7397680104909345
0.4103022944399179

```

We will learn more about what a method and what `Math.random()` means in a later chapter.

To get a random integer between 0 to 9:

```javascript
Math.floor(Math.random() * 10);

```

This is multiplying the decimal number by 10 and then rounding it down to the nearest integer with `Math.floor()`.

So the above three numbers would look like:

```text
0
7
4

```

## Instructions

The Magic 8 Ball is a popular office toy and children's toy invented in the 1940's for fortune-telling and advice seeking. 🎱

It's an oversized 8 ball with some of the following answers:

* Yes - definitely.
* It is decidedly so.
* Without a doubt.
* Reply hazy, try again.
* Ask again later.
* Better not tell you now.
* My sources say no.
* Outlook not so good.
* Very doubtful.

Create a `magic8.js` program that can respond to any Yes or No questions with a different answer each time it executes.

The output should have the following format:

```text
Question:       [Question]
Magic 8 Ball:   [Answer]

```

For example:

```text
Question:       Is Codédex better than Udemy yet?
Magic 8 Ball:   Better not tell you now.

```

---

## Bonus: Jawaban magic8.js

```javascript
// magic8.js
let question = "Will I master JavaScript?";
let randomNumber = Math.floor(Math.random() * 9); // Menghasilkan angka 0 sampai 8
let answer = "";

// Menggunakan else if yang baru dipelajari untuk mengevaluasi 9 kemungkinan
if (randomNumber === 0) {
  answer = "Yes - definitely.";
} else if (randomNumber === 1) {
  answer = "It is decidedly so.";
} else if (randomNumber === 2) {
  answer = "Without a doubt.";
} else if (randomNumber === 3) {
  answer = "Reply hazy, try again.";
} else if (randomNumber === 4) {
  answer = "Ask again later.";
} else if (randomNumber === 5) {
  answer = "Better not tell you now.";
} else if (randomNumber === 6) {
  answer = "My sources say no.";
} else if (randomNumber === 7) {
  answer = "Outlook not so good.";
} else {
  answer = "Very doubtful.";
}

console.log("Question:       " + question);
console.log("Magic 8 Ball:   " + answer);

```

```

```