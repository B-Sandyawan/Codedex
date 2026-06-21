```markdown
# 31. E = mc²

## Parameters

By now, you may be wondering why functions even use these parentheses. Do they have a purpose? In fact, they do!

When defining a function, you can add one or more parameters inside the parentheses to signify what input(s) the function needs when called.

```javascript
function example(parameter) {
  // Function code here
}

```

Inside the function body, we can use this parameter to return something else, such as using it in an evaluation.

Here's another example of parameters, using an updated `greetings()` function:

```javascript
function greetings(name) {
  console.log("Hi! My name is " + name + ".");
}

greetings("Marshall");

```

Try this out for yourself by running the code in our editor!

You can add more than one parameter to a function, separated by commas, and they can be any data type!
Try the following:

```javascript
function greetings(name, age) {
  console.log("Hi! My name is " + name + ".");
  console.log("I am " + age + " years old.");
}

greetings("Marshall", 30);

```

## Arguments

After we define a function with parameters, we can call it later in our program. But we have to include a value in the parentheses.

When calling a function, we call these values arguments that are passed to the function to return something.

```javascript
greetings("Cody");

```

This logs the following to the console:

```text
Hi! My name is Cody.

```

*Note: If we do not pass an argument, an `undefined` value is used instead. (e.g., Hi! My name is undefined.)*

So to recap:

* **Parameters** are used when defining a function.
* **Arguments** are used when calling a function.

## Instructions

In 1905, Albert Einstein changed the world of physics with his theory of relativity. It transformed how we understand the relationship between space, time, and energy.

The most notable equation to come out of this theory was the following:
`E = mc²`

The `E` stands for energy, which is the product of the following:

* `m` for mass, usually measured in kilograms (kg).
* `c²` is the speed of light multiplied by itself.

1. Write a function called `relativityTheory()`.
2. It should accept a single `mass` parameter that is an integer or decimal number.
3. And calculate the energy and return it. Don't forget to Google the speed of light!
4. Afterward, call the `relativityTheory()` function with a mass argument.

---

## Bonus: Jawaban e-mc2.js

```javascript
// e-mc2.js

// Mendefinisikan fungsi dengan parameter 'mass'
function relativityTheory(mass) {
  // Kecepatan cahaya (c) adalah sekitar 299.792.458 meter per detik
  const speedOfLight = 299792458; 
  
  // Menghitung E = mc^2
  let energy = mass * (speedOfLight ** 2);
  
  // Mengembalikan hasil perhitungan
  return energy;
}

// Memanggil fungsi dengan argumen mass (misalnya 10 kg)
let myMass = 10;
let totalEnergy = relativityTheory(myMass);

console.log("Massa: " + myMass + " kg");
console.log("Energi yang dihasilkan: " + totalEnergy + " Joules");

```

```

``````markdown
# 31. E = mc²

## Parameters

By now, you may be wondering why functions even use these parentheses. Do they have a purpose? In fact, they do!

When defining a function, you can add one or more parameters inside the parentheses to signify what input(s) the function needs when called.

```javascript
function example(parameter) {
  // Function code here
}

```

Inside the function body, we can use this parameter to return something else, such as using it in an evaluation.

Here's another example of parameters, using an updated `greetings()` function:

```javascript
function greetings(name) {
  console.log("Hi! My name is " + name + ".");
}

greetings("Marshall");

```

Try this out for yourself by running the code in our editor!

You can add more than one parameter to a function, separated by commas, and they can be any data type!
Try the following:

```javascript
function greetings(name, age) {
  console.log("Hi! My name is " + name + ".");
  console.log("I am " + age + " years old.");
}

greetings("Marshall", 30);

```

## Arguments

After we define a function with parameters, we can call it later in our program. But we have to include a value in the parentheses.

When calling a function, we call these values arguments that are passed to the function to return something.

```javascript
greetings("Cody");

```

This logs the following to the console:

```text
Hi! My name is Cody.

```

*Note: If we do not pass an argument, an `undefined` value is used instead. (e.g., Hi! My name is undefined.)*

So to recap:

* **Parameters** are used when defining a function.
* **Arguments** are used when calling a function.

## Instructions

In 1905, Albert Einstein changed the world of physics with his theory of relativity. It transformed how we understand the relationship between space, time, and energy.

The most notable equation to come out of this theory was the following:
`E = mc²`

The `E` stands for energy, which is the product of the following:

* `m` for mass, usually measured in kilograms (kg).
* `c²` is the speed of light multiplied by itself.

1. Write a function called `relativityTheory()`.
2. It should accept a single `mass` parameter that is an integer or decimal number.
3. And calculate the energy and return it. Don't forget to Google the speed of light!
4. Afterward, call the `relativityTheory()` function with a mass argument.

---

## Bonus: Jawaban e-mc2.js

```javascript
// e-mc2.js

// Mendefinisikan fungsi dengan parameter 'mass'
function relativityTheory(mass) {
  // Kecepatan cahaya (c) adalah sekitar 299.792.458 meter per detik
  const speedOfLight = 299792458; 
  
  // Menghitung E = mc^2
  let energy = mass * (speedOfLight ** 2);
  
  // Mengembalikan hasil perhitungan
  return energy;
}

// Memanggil fungsi dengan argumen mass (misalnya 10 kg)
let myMass = 10;
let totalEnergy = relativityTheory(myMass);

console.log("Massa: " + myMass + " kg");
console.log("Energi yang dihasilkan: " + totalEnergy + " Joules");

```

```

```