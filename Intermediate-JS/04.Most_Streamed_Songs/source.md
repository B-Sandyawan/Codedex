```markdown
# 04. Most Streamed Songs

## for...of

ES6 also gave us a new way to do repetitive things. First is the `for...of` loop.

This loop is great for iterating over each item in a sequence such as a string:

```javascript
const name = "dumbo";

for (let letter of name) {
  console.log(letter);
}
/* Output:
d
u
m
b
o
*/

```

You can also do this for an array:

```javascript
const boroughs = ["brooklyn", "manhattan", "the bronx", "queens", "staten island"];

for (let borough of boroughs) {
  console.log(borough);
}
/*
Output:
brooklyn
manhattan
the bronx
queens
staten island
*/

```

## for...in

Another fun loop to check out is the `for...in`.

This is ideal for looping through objects. More specifically, you're looping through the object's keys:

```javascript
const person = {
  name: "Austin",
  age: 29,
  occupation: "musician"
}

for (let info in person) {
  console.log(person[info]);
}
/*
Output:
Austin
29
musician
*/

```

As you loop through each key in the `person` object, you access the paired value with `[ ]` bracket notation (i.e., `person[info]`).

## Instructions

On Spotify, the top 5 most streamed songs have over 18 billion listens combined! 🤯

The `most-streamed-songs.js` file is importing a array of objects about each of these five songs.

On line 29, let's use `for...of` and `for...in` loops to display info about these songs on the console.

The output should look like this:

```text
Blinding Lights
The Weeknd
4260000000

Shape of You
Ed Sheeran
3901000000

Someone You Loved
Lewis Capaldi
3413000000

Sunflower
Post Malone (feat. Swae Lee)
3345000000

As It Was
Harry Styles
3278000000

```

---

## Bonus: Jawaban most-streamed-songs.js

Karena kamu diminta menulis kode mulai dari baris 29, kita asumsikan array objeknya sudah dibuat di atasnya dan bernama `songs` (atau nama serupa). Berikut adalah cara menggabungkan `for...of` dan `for...in` untuk mendapatkan output yang diinginkan:

```javascript
// most-streamed-songs.js

// Asumsi: Array yang diimpor terlihat seperti ini (Baris 1-28)
const songs = [
  { title: "Blinding Lights", artist: "The Weeknd", streams: 4260000000 },
  { title: "Shape of You", artist: "Ed Sheeran", streams: 3901000000 },
  { title: "Someone You Loved", artist: "Lewis Capaldi", streams: 3413000000 },
  { title: "Sunflower", artist: "Post Malone (feat. Swae Lee)", streams: 3345000000 },
  { title: "As It Was", artist: "Harry Styles", streams: 3278000000 }
];

// Baris 29: Mulai kodemu di sini
for (let song of songs) {       // 1. Loop melalui setiap objek lagu di dalam array
  for (let key in song) {       // 2. Loop melalui setiap properti (title, artist, streams) di dalam objek lagu
    console.log(song[key]);     // 3. Cetak nilai dari properti tersebut
  }
  console.log("");              // 4. Cetak baris kosong untuk memisahkan antar lagu
}

```

```

```