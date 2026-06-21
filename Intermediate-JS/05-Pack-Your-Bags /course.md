```markdown
# 05. Pack Your Bags

## The Spread Operator

When it comes to arrays, you can add them together:

```javascript
const groceryList = ["apples", "bananas", "milk", "eggs"];
const householdItems = ["paper towels", "dish soap", "toothpaste"];
const combinedList = [groceryList, householdItems];

console.log(combinedList);
/* Output:
[
  [ 'apples', 'bananas', 'milk', 'eggs' ],
  [ 'paper towels', 'dish soap', 'toothpaste' ]
]
*/

```

Oh wait... the output is an array of two arrays. How can we combine them into a single array? We can use a handy tool called a spread operator!

The spread operator lets you "unpack" items out of collections, like array elements or object properties, for use in other places. This allows us to do cool things, such as:

* Apply zero or more arguments to a function.
* Unpack items and add them to another array or object.

To use the spread operator, we use three `...` periods on the left side of the array name.

From our last example, we can return a single array of the combined content with the spread operator:

```javascript
const combinedList = [...groceryList, ...householdItems];

console.log(combinedList);
/*
Output: 
[
  'apples',
  'bananas',
  'milk',
  'eggs',
  'paper towels',
  'dish soap',
  'toothpaste'
]
*/

```

Much better! The spread operator took everything out of the `groceryList` and `householdItems` arrays and placed them in a new `combinedList` array.

## The Rest Operator

We can also use those same three dots to "pack" items into arrays and objects.

The rest operator collects zero or more items into objects or arrays, that can be used for things like:

* Defining functions with zero or more parameters.
* Help with destructuring arrays and objects.

If we're defining a function but aren't sure how many arguments it should take, we can use the rest operator:

```javascript
const packGroceries = (...items) => {
  return items;
}

const packedGroceries = packGroceries("apples", "bananas", "milk");
const morePackedGroceries = packGroceries("eggs", "bread");

console.log(packedGroceries);
console.log(morePackedGroceries);
/*
Output:
[ 'apples', 'bananas', 'milk' ]
[ 'eggs', 'bread' ]
*/

```

## Instructions

Let's practice these nifty new operators by planning an intercontinental vacation! 🗺️

1. Define a `planVacation()` function that returns a string array of destinations we plan to visit. It should accept at least two string arguments:
* `destinationOne`
* `destinationTwo`


2. Use the rest operator so the `planVacation()` function can have more arguments passed to it.
3. Then, execute the `planVacation()` function and log the results to the console.

Where in the world will you plan for next?

---

## Bonus: Jawaban pack-your-bags.js

```javascript
// pack-your-bags.js

// 1 & 2. Mendefinisikan arrow function dengan dua parameter spesifik dan rest operator (...moreDestinations)
const planVacation = (destinationOne, destinationTwo, ...moreDestinations) => {
  // Menggunakan spread operator untuk menyatukan semua argumen ke dalam satu array baru
  return [destinationOne, destinationTwo, ...moreDestinations];
};

// 3. Menjalankan fungsi dengan beberapa argumen dan mencetaknya ke konsol
const myTrip = planVacation("Semarang", "Tokyo", "Berlin", "Munich", "Kyoto");

console.log("My vacation plans:");
console.log(myTrip);

```