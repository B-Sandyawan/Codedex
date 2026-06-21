```markdown
# 28. DNA

## Congrats!

Hip hip array! You made it to the last exercise! 🎊

In this chapter, we learned a lot about arrays, including:
* Creating, accessing, and updating an array with square brackets.
* Looping over arrays with the `.length` property.
* Adding and removing array elements with various methods:
  * `.push()`
  * `.unshift()`
  * `.shift()`
  * `.pop()`
* Confirming if a given element or value exists in an array with the `.includes()` and `.indexOf()` methods.

## Instructions

Let's use what we learned about arrays to build a DNA sequence! 🧬

DNA is made of the following four pieces:
* Adenine (A)
* Cytosine (C)
* Guanine (G)
* Thymine (T)

Collectively, these four pieces represent the unique genetic makeup of most life forms!

Create a 24-element `myDNA` array of that by randomly choosing one of these four pieces. Start with the following array:

```javascript
const dnaPieces = ["A", "C", "G", "T"];

```

Inside a loop, to build the `myDNA` array by doing the following:

1. Get three random index numbers from `dnaPieces` with `Math.floor()` and `Math.random()`.
2. Build a string of three letters by accessing the `dnaPieces` array elements with the three random index numbers.
3. Add this string to the `myDNA` array.

Lastly, log the `myDNA` array to the console.

The output may look like this:

```text
[
  "TAG", "GAG", "ATA", "AAC",
  "AAT", "CTT", "AGG", "TAG",
  "ATC", "ACT", "GAG", "TTA",
  "CTG", "ACG", "GAC", "TCC",
  "GTA", "ACT", "GCA", "GTA",
  "GCG", "GCT", "TCT", "TAA"
]

```

---

## Bonus: Jawaban dna.js

```javascript
// dna.js

const dnaPieces = ["A", "C", "G", "T"];
let myDNA = [];

// Loop berjalan 24 kali untuk membuat 24 elemen
for (let i = 0; i < 24; i++) {
  
  // 1. Dapatkan 3 angka index acak (antara 0 sampai 3)
  let index1 = Math.floor(Math.random() * 4);
  let index2 = Math.floor(Math.random() * 4);
  let index3 = Math.floor(Math.random() * 4);
  
  // 2. Rangkai 3 huruf dari dnaPieces menggunakan index acak tersebut
  let piece1 = dnaPieces[index1];
  let piece2 = dnaPieces[index2];
  let piece3 = dnaPieces[index3];
  let sequence = piece1 + piece2 + piece3;
  
  // 3. Tambahkan string tersebut ke dalam array myDNA
  myDNA.push(sequence);
}

// Terakhir, tampilkan myDNA ke konsol
console.log(myDNA);

```

```

```