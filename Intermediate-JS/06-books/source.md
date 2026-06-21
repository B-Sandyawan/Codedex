```markdown
# 06. Reading Lists

## Congrats!

Woot Woot! You made it to the end of the first chapter! 🙌

Over the years, how we write JS code has become more robust. Here's a refresher on the things we've learned:
* ES6 modernized a lot of how we write JS today.
* Arrow functions offer a concise way of writing functions, even on one line!
* We can use template literals to write single strings with placeholder variables.
* The `for...of` and `for...in` loops are good with arrays and objects, respectively.
* Spread operators simplify adding array items or object properties into new arrays or objects in JavaScript.
* Rest operators are placeholders for arrays that might have zero or more items.

## Instructions

Goodreads is a popular resource for keeping track of the books you read. Let's imitate this with ES6! 📖

Define a `goodreadsInfo` object with the following structure:

```javascript
const goodreadsInfo = {
  currentlyReading: [
    {
      title: "",
      author: ""
    }
  ],

  wantToRead: [
    {
      title: "",
      author: ""
    }
  ]
}

```

Add at least one book object (with a `title` and `author`) to each array.

### addNewBooks() Function

This part tests our knowledge of the spread and rest operators.

Define an `addNewBooks()` arrow function with the following parameters:

1. A `books` array of strings.
2. An optional `additionalBookObjects` array.

This function should return a new array that includes all items from `books` along with any items from the `additionalBookObjects` array.

Then, use this function on at least one of the lists from the `goodreadsInfo` object, like so:

```javascript
goodreadsInfo.currentlyReading = addNewBooks(goodreadsInfo.currentlyReading, /* new books here */);

```

### showGoodreadsInfo() Function

This part tests our knowledge of loops and template literals.

Define a `showGoodreadsInfo()` function that accepts a single `info` parameter.

Inside, create two variables representing the reading list arrays from the `info` parameter.
Then, use a combination of `console.log()` statements, `for...of` loops, and template literals to output our reading lists to the console.

Lastly, execute the `showGoodreadsInfo()` function. The output should look similar to this:

```text
Currently Reading:
The Hobbit by J.R.R. Tolkien
The Two Towers by J.R.R. Tolkien
The MOM Test by Rob Fitzpatrick

Want to Read:
The Art of Language Invention by David Peterson
Looking for Alaska by John Green

```

Afterward, feel free to share your reading lists with the world by clicking the Twitter button below!

---

## Bonus: Jawaban reading-lists.js

```javascript
// reading-lists.js

// 1. Mendefinisikan objek goodreadsInfo dengan setidaknya satu buku di setiap array
const goodreadsInfo = {
  currentlyReading: [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien"
    }
  ],

  wantToRead: [
    {
      title: "The Art of Language Invention",
      author: "David Peterson"
    }
  ]
};

// 2. Fungsi addNewBooks menggunakan rest operator (...additionalBookObjects)
const addNewBooks = (books, ...additionalBookObjects) => {
  // Mengembalikan array baru menggunakan spread operator (...)
  return [...books, ...additionalBookObjects];
};

// 3. Menambahkan buku baru ke dalam list menggunakan addNewBooks()
goodreadsInfo.currentlyReading = addNewBooks(
  goodreadsInfo.currentlyReading, 
  { title: "The Two Towers", author: "J.R.R. Tolkien" },
  { title: "The MOM Test", author: "Rob Fitzpatrick" }
);

goodreadsInfo.wantToRead = addNewBooks(
  goodreadsInfo.wantToRead,
  { title: "Looking for Alaska", author: "John Green" }
);

// 4. Fungsi showGoodreadsInfo() untuk menampilkan daftar buku
const showGoodreadsInfo = (info) => {
  // Mengambil array dari parameter info
  const currentlyReading = info.currentlyReading;
  const wantToRead = info.wantToRead;

  // Menampilkan daftar Currently Reading
  console.log("Currently Reading:");
  for (let book of currentlyReading) {
    // Menggunakan template literal
    console.log(`${book.title} by ${book.author}`);
  }

  // Baris kosong pemisah
  console.log("\nWant to Read:");
  
  // Menampilkan daftar Want to Read
  for (let book of wantToRead) {
    console.log(`${book.title} by ${book.author}`);
  }
};

// 5. Menjalankan fungsi untuk menampilkan hasilnya
showGoodreadsInfo(goodreadsInfo);

```

```

```