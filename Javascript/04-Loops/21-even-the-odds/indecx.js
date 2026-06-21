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