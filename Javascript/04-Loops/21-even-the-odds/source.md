```markdown
# 21. Even The Odds

## continue

JavaScript provides a few keywords that let us navigate loops in cool ways.

First, we have the `continue` keyword. If a given condition is true, the `continue` keyword ends the current iteration in a given `for` or `while` loop and we go to the next one.

```javascript
for (let i = 0; i < 5; i++) {
  if (i == 1) {
    continue;
  }
  console.log(i);
}

```

The code above will output the numbers 0 through 4, except for 1 because the `continue` skips this iteration.

```text
0
2
3
4

```

## break

The other keyword that lets us end our loops early is the `break` keyword.

If a given condition in a loop is true, this keyword ends the loop altogether and the program resumes on the line immediately after the closing curly bracket of the loop.

```javascript
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

```

If and when `i` is equal to 3, the `break` keyword ends the loop, and our output looks like this:

```text
0
1
2

```

## Instructions

Let's try out the `continue` and `break` keywords using even and odd numbers!

Write an `even-odds.js` file that begins with a `for` loop that iterates from 1 to 50.

1. If the iterator variable `i` is odd, use the `continue` keyword to skip this iteration. Otherwise, log the number to the Console.
2. If the iterator variable is equal to `42`, log `42` to the Console and use the `break` keyword to exit the loop.

The output should look like this:

```text
2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42

```

---

## Bonus: Jawaban even-odds.js

```javascript
// even-odds.js

for (let i = 1; i <= 50; i++) {
  // Jika 'i' ganjil (sisa bagi dengan 2 tidak sama dengan 0), lewati iterasi ini
  if (i % 2 !== 0) {
    continue;
  }
  
  // Jika tidak ganjil (berarti genap), cetak angkanya
  console.log(i);
  
  // Jika angkanya sudah mencapai 42, hentikan loop
  if (i === 42) {
    break;
  }
}

```

```

```