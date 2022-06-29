//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

console.log("****** ITERATION **********");
//*Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 250, 50, 89];
fiyatlar.forEach(yazdır);

function yazdır(value) {
  console.log(value);
}

fiyatlar.forEach((value) => console.log(value));

//** fiaytlar disizindekilerin toplamını kosaola yazıdırınız */
let toplam = 0;
fiyatlar.forEach((fiyat) => (toplam += fiyat));
console.log(`toplam`, toplam);

//! foreach metodu vaid bir metottur. yani herhangi bir değer döndürmez.

// //***ödev fiyatlara %10 zam yapılsın:**///
// let zamlıFiyatlar = 0;
// fiyatlar.forEach((deger, indis, dizi) => {
//   //   zamlıFiyatlar = (deger* 10)/100 + deger
//   //   console.log(`${indis}.iterasyon toplamı: ${zamlıFiyatlar}`);
//   dizi[indis] = (deger * 10) / 100 + deger;
//   // dizi[indis] = deger*1.1
// });
// console.log(fiyatlar);

//  //*************örnek */ */
//    let toplam1 = 0;
//    fiyatlar.forEach((deger, indis, dizi) => {
//      toplam1 += deger;
//      console.log(`${indis}.iterasyon toplamı: ${toplam1}`);
//      dizi[indis] = deger + 10;
//    });

const fiyatlar = [100, 250, 50, 89];
fiyatlar.forEach((value,index,array)=>{ 
  // array[index] = (value * 10)/100 + value
  array[index] = Math.floor(value * 1.10);
});
console.log(fiyatlar);

//*****MAP****//////// */
//? bir diziyi alır, kopyasını modifiye eder**/////


const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

console.log(isimler.map((isim) => isim.toLocaleUpperCase()));
const kucukIsimler = isimler.map((isim) => isim.toLowerCase());
console.log(kucukIsimler);


// const dolar = 15.92;
// const euro = 17;
// const tlFiyatlar = [100,150,100,250];
// console.log(( tlFiyatlar.map((tlFiyatlar) => {tlFiyatlar/dolar)});

// const buyukIsimler= isimler.map((isim, i,dizi) => {
//     dizi[i] = isim.toLocaleUpperCase();
//     return isim.toLocaleUpperCase()
// });
// console.log(buyukIsimler);

/*** değiştirin diyorsa map vardır. */
isimler.filter((x)=> x ==="Ahmet").map((x)=> x.toLocaleUpperCase()).forEach((x) => console.log(x));

//!! map tamamını filter seçilmişleri döndürür.
const kucuk250 = fiyatlar.filter((f) => f<250);
console.log(kucuk250);

const buyuk90 = fiyatlar.filter((f) => f > 90);
console.log(buyuk90);

//!! reduce kaldı.