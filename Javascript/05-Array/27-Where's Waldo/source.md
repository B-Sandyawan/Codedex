```markdown
# 27. Where's Waldo

## Array Methods

As you work more and more with arrays, you'll start to discover other cool methods we can use for them!

In this exercise, we will go over the `.indexOf()` and `.includes()` methods.

### .indexOf()

You may recall that we use the index to obtain the value of a given array element:

```javascript
const myArray = [1, 2, 3];
console.log(myArray[1]); // Output: 2

```

But what if we wanted to find out the index of a particular element's value? We can do that with the `.indexOf()` method:

```javascript
const stories = [
  "Sorcerer's Stone",
  "Chamber of Secrets",
  "Prisoner of Azkaban",
  "Goblet of Fire",
  "Order of the Phoenix",
  "Half-Blood Prince",
  "Deathly Hallows"
];

console.log(stories.indexOf("Half-Blood Prince")); // Output: 5

```

If the array doesn't have the value we're looking for, `-1` is returned instead.

*Note: If there are multiple elements with the same value in an array, the `.indexOf()` returns the index of the first occurrence of that value.*

### .includes()

We can also check if an array contains a particular element value with the `.includes()` method:

```javascript
array.includes(value);

```

The `.includes()` method checks if an element with the `value` parameter exists in the array, and returns a boolean `true` if it does or `false` otherwise. Here's an example:

```javascript
const myArray = [1, 2, 3];

console.log(myArray.includes(3));
console.log(myArray.includes(42));
/*
Output:
true
false 
*/

```

## Instructions

For this exercise, we will practice using the `.indexOf()` and `.includes()` methods with a variation of the notable "Where's Waldo?" children's books.

Copy and paste the following array in an `index.js` file:

```javascript
const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof"
];

```

Next, write a conditional statement with the following logic:

1. If our `characters` array includes an element with the value `"Waldo"`, do this:
* Save the index of the `"Waldo"` element in a new variable called `waldoIndex`.
* Then use `console.log()` to display `"Found Waldo at index {indexNumber}!"` (e.g., `"Found Waldo at index 3"`).


2. Else, log `"Not found"` to the console.

---

## Bonus: Jawaban index.js

```javascript
// index.js

const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof"
];

// Cek apakah array memiliki elemen "Waldo"
if (characters.includes("Waldo")) {
  // Simpan index dari "Waldo"
  let waldoIndex = characters.indexOf("Waldo");
  
  // Tampilkan pesan dengan index yang ditemukan
  console.log("Found Waldo at index " + waldoIndex + "!");
} else {
  // Jika "Waldo" tidak ada di dalam array
  console.log("Not found");
}

```

```

```