// map(), filter(), reduce() soruları
// const array = [`kalem`, `silgi`, `mouse`, `screen`, `glasses`, 9, 20, 62, 3.14, -48, true, false];

// sadece number olanları 3 ile çarpalım
// stringleri slice la
// Calculate the mean and median values of the number elements from the input array.
// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. const input = 'Every developer likes to mix kubernetes and javascript'; result 'E3y d7r l3s to mix k8s and j8t'
// If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.   9,
//   20,
//   62,
//   3.14,
//   -48,
//   true,
//   false,

// const array = [
//   `kalem`,
//   `silgi`,
//   `mouse`,
//   `screen`,
//   `glasses`,

// ];

// console.log(array.map((name) => name.toLocaleUpperCase()));

//** sadece number olanları 3 ile çarpalım

const array1 = [
  `kalem`,
  `silgi`,
  `mouse`,
  `screen`,
  `glasses`,
  20,
  62,
  3.14,
  -48,
  true,
  false,
];

array1.forEach((v, i, arr) => {
  if (typeof v == typeof Number()) {
    arr[i] = v * 3;
  }
});
console.log(array1);

//*-------------- ÖDEV -------------------
//* fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
//* konsola tek tek bastırınız.

const fiyatlar = [100, 250, 50, 89];

// const fiyatlarBuyuk90 = fiyatlar.filter((f)=> f>90).forEach((f)=>console.log(f););
// console.log(fiyatlarBuyuk90);
// fiyatlar.filter((x) => x > 90).forEach((x) => console.log(x));
//* fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere
//*  %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

fiyatlar
  .filter((x) => x < 110)
  .map((x) => x * 1.1)
  .forEach((x) => console.log(x.toFixed(1)));

//* maaslar 4000'den düsük olanlara %50 zam yapmak istiyoruz
//* ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [1200, 3000, 5000, 4000, 6000, 6500];
const list = [];
maaslar
  .filter((x) => x < 4000)
  .map((x) => x * 1.5)
  .forEach((x) => list.push(x));
console.log(list);

//* Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.

maaslar
  .filter((x) => x > 4000)
  .map((X) => X * 1.25)
  .forEach((x) => console.log(x));

//  Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence.onst input = 'Every developer likes to mix kubernetes and javascript';result 'E3y d7r l3s to mix k8s and j8t'  
//?result 'E3y d7r l3s to mix k8s and j8t'
// pseudo;

//** cümlenin kelimelerine ayır
//** bir array içinde topla
//** bir fonksiyonla kelimenin ilk ve son harflar ile kalan harflari harflerin arasına concat,
//** bir array içinde yazdır.


//!!       1.yöntem          */
const input = 'Every developer likes to mix kubernetes and javascript'; 
const array = input.split(` `);

const empty = [];

for (let i = 0; i < array.length; i++) {
  if (array[i].length > 3) {
    y = array[i][0] + (array[i].length - 2) + array[i][array[i].length - 1];
    empty.push(y);
  } else {
    empty.push(array[i]);
  }
}
console.log(empty);


//!!    2 yöntem  

//slice(-1) string ve array da son indexi verir.

