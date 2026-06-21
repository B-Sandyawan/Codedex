```markdown
# 03. 99 Bottles

## Logging Strings

Remember one of the examples from the last exercise, where we log a string to the console?

Here it is, again:

```javascript
const planetGreetings = (name) => {
  return "Greetings from planet " + name;
}

console.log(planetGreetings("Earth 🌍"));
// Output: Greetings from planet Earth 🌍

```

In the `return` statement, we are concatenating, or adding, two strings together:

* The `"Greetings from planet "` part.
* The `name` string variable.

But what if there was a way to write this in a single string, that lets us still assign any string we want to `name`? ES6 to the rescue! 🦸

## Template Literals

Another fun feature of ES6 is template literals.

Template literals are special strings that are enclosed in backticks instead of quotes.

Let's return to that function and see what this looks like:

```javascript
const planetGreetings = (name) => {
  return `Greetings from planet ${name}`;
}

console.log(planetGreetings("Saturn 🪐"));
// Output: Greetings from planet Saturn 🪐

```

We got the same output!

With template literals:

* Strings are surrounded in backticks, not quotes.
* They start with a dollar sign followed by curly brackets `${ }`.
* Anything inside the brackets is a placeholder for a value (e.g., `name`).

## Instructions

"99 Bottles of Pop" is an alternative to an old song sung to pass the time on road trips.

In the editor on the right, there is some code already written for us. If you run it, you should see the song logged to the console.

Right now, the `console.log()` statements use concatenation. Let's replace these with string literals.

Rerun the code to make sure the story is logged like it was before.

---

## Bonus: Jawaban 99-bottles.js

Karena kode awalnya tidak disertakan di sini, berikut adalah versi perulangan "99 Bottles of Pop" yang sudah diubah sepenuhnya menggunakan **Template Literals** (menggunakan *backticks* dan `${}`):

```javascript
// 99-bottles.js

for (let i = 99; i > 0; i--) {
  // Menggunakan template literals untuk menggantikan penggabungan string (concatenation)
  console.log(`${i} bottles of pop on the wall, ${i} bottles of pop.`);
  
  let remaining = i - 1;
  
  if (remaining > 0) {
    console.log(`Take one down and pass it around, ${remaining} bottles of pop on the wall.\n`);
  } else {
    console.log(`Take one down and pass it around, no more bottles of pop on the wall.\n`);
  }
}

```

```

```