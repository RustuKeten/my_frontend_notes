//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log('******* LOOPS IN ARRAYS ******');


// for in, for of loopp




//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrncileri aramamızı sağlayacak ve aranılan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*  fonksiyonu yazınız. Eğer aranılan isimde bir ogrenci yok ise
//* fonksiyon aranılan ogrenci bulunamdı dondurulmelidir.
//*--------------------------------------------------------
const ogrenciler = [
  "ahmet",
  "mehmet",
  "ismet",
  "saffet",
  "ahmet",
  "nur",
  "can",
  "nur",
  "mehmet",
  "cem",
];

// const ogrenciBul = function(isim){
//     let sayac =0;
//     for(let i in ogrenciler){
//         if (ogrenciler[i]===isim){
//             sayac++;
//         }
//     }
//     if (sayac === 0){
//         return`${isim} bulunamadı`
        
//     }else{
//         return `${isim},${sayac} adet bulundu`;
//     }
// };

// let ogrIsim =prompt("öğrenci adını giriniz:").toLocaleLowerCase();
// console.log(ogrenciBul(ogrIsim));
//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrncileri aramamızı sağlayacak ve aranılan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*  fonksiyonu yazınız. Eğer aranılan isimde bir ogrenci yok ise
//* fonksiyon aranılan ogrenci bulunamdı dondurulmelidir.
//*--------------------------------------------------------


// const ogrenciBulFOrof = function (isim) {
//   let sayac = 0;
//   for (let ogrenci of ogrenciler) {
//     if (ogrenci === isim) {
//       sayac++;
//     }
//   }

//   if (sayac === 0) {
//     return `${isim} bulunamadi`;
//   } else {
//     return `${isim}, ${sayac} adet bulundu`;
//   }
// };

// let ogrName = prompt('Ogrenci adini giriniz:').toLocaleLowerCase();
// console.log(ogrenciBul(ogrName));
//** ternary */
const ogrenciBulFOrof = function (isim) {
  let sayac = 0;
  for (let ogrenci of ogrenciler) {
    ogrenci === isim ? sayac++: null; //ternary
    // ogrenci === isim && sayac++; //koşul doğru ise çalıştır. short circuiting
    // ogrenci === isim || sayac--; // koşul yanlış ise (pipe) çalıştır.
    }
//   return !sayac? `${isim} bulunamadi`:`${isim}, ${sayac} adet bulundu`;
  return sayac ? `${isim}, ${sayac} adet bulundu`:`${isim} bulunamadi`;
};
let ogrName = prompt("Ogrenci adini giriniz:").toLocaleLowerCase();
console.log(ogrenciBulFOrof(ogrName));