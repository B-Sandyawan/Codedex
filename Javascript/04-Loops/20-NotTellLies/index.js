
const luckyNumber = 10; // Mengikuti contoh output
let guess = Math.floor(Math.random() * 10) + 1;

// Loop berjalan selama tebakan TIDAK sama dengan luckyNumber
while (guess !== luckyNumber) {
  console.log("Nope, it isn't " + guess);
  
  // Sangat penting: Hasilkan angka tebakan baru agar tidak terjadi infinite loop!
  guess = Math.floor(Math.random() * 10) + 1;
}

// Berada di luar loop, artinya tebakan sudah sama dengan luckyNumber
console.log("My lucky number is " + luckyNumber + "!");
