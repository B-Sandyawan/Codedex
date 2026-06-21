// Write code below 💖

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