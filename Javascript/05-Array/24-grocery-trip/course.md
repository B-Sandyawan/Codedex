```markdown
# 24. Grocery Trip

## Index

Okay, so we now know how to create an array and store data in it. But how can we access and change the elements within it?

To access a single element in an array, we need to first learn about index.

An index is an element's position in an array.

For example:

```javascript
let fruits = ["strawberries 🍓", "blueberries 🫐", "bananas 🍌"];

```

* The element at index 0 is "strawberries 🍓".
* The element at index 1 is "blueberries 🫐".
* The element at index 2 is "bananas 🍌".

To access a single element in an array, we use the bracket notation!

```javascript
console.log(fruits[0]);

```

The code above uses bracket notation to retrieve the value of the first element of the `fruits` array. But wait… if this is the first element, then why are we using 0?

Array indices start at 0, not 1. You'll come to find that this is the case for most programming languages!

We can also use bracket notation to change the value of an existing element:

```javascript
let pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

pokemon[2] = "Pikachu";
console.log(pokemon);
// Output: ["Bulbasaur", "Charmander", "Pikachu"]

```

We can also use it to assign a new value to an index that doesn't yet exist! The following example adds a new element to the end of the array:

```javascript
let meetings = [4, 4, 1, 3, 2];

meetings[5] = 0;
console.log(meetings);
// Output: [4, 4, 1, 3, 2, 0]

```

*Note: Be careful when creating new elements like this, for you may end up creating `undefined` elements between the old last element and the new last element:*

```javascript
let temperature = [75, 69, 71, 64];

temperature[6] = 88;
console.log(temperature);
// Output: [75, 69, 71, 64, undefined, undefined, 88]

```

## Instructions

Let's use array bracket notation to customize a list for a trip to the grocery store!

Copy and paste the following array into an `index.js` file:

```javascript
let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];

```

It looks like we actually don't need eggs! But we do need butter and laundry soap!

Use bracket notation to:

1. Replace "🥚 Eggs" with "🧈 Butter".
2. Add "🧼 Laundry soap" to the end of the `groceryList` array.
3. Finally, log the updated `groceryList` array to the console.

---

## Bonus: Jawaban index.js

```javascript
// index.js

let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];

// 1. Mengganti "🥚 Eggs" (index 2) dengan "🧈 Butter"
groceryList[2] = "🧈 Butter";

// 2. Menambahkan "🧼 Laundry soap" di akhir array (index 4)
groceryList[4] = "🧼 Laundry soap";

// 3. Menampilkan isi array yang sudah diperbarui
console.log(groceryList);

```

```

```