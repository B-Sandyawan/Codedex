// duck-duck-goose.js

let randomNumber = Math.floor(Math.random() * 10);

// Loop akan terus berjalan selama angka acak BUKAN 7
while (randomNumber !== 7) {
  console.log("Duck 🦆");
  
  // Menghasilkan angka acak baru agar loop tidak berjalan tanpa henti (infinite loop)
  randomNumber = Math.floor(Math.random() * 10);
}

// Ketika angka 7 akhirnya didapatkan, loop berhenti dan kode di bawah ini dieksekusi
console.log("Goose! 🦢");