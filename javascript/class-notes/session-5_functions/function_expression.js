//?FUNCTIONSS */

//*****EXPRESSION******** */
//! bu yöntemle bir fonksiyon değişkene atayarak kullanmak istediğimizde daha önce tanımlanması GEREKİR.
const tekçift = function (number) {
    return number %2 === 0 ? `${number} çifttir`: `${number} tektir`; 
}; 
// console.log(tekÇift(5));
console.log(tekçift(2));

//*************örnek2: 3 sayının en büyüğünü bulma*** */

const  buyukBul= function(x, y, z){
    let enBuyuk;
    if (x>y && x>z) {
        enBuyuk = x;
    } else if (y > x && y > z) {
        enBuyuk = y;
    } else if (z > x && z > y) {
        enBuyuk = z;  
    } else {
        enBuyuk = x;
    }
    return enBuyuk;
}
console.log('en büyük sayı:', buyukBul(1,2,3));
console.log('en büyük sayı:', buyukBul(-8,-9,0));

//* ORNEK3: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//*****************************************************/

const hesapla = function (islem, s1, s2) {
  let sonuc;

  if (islem == '+') {
    sonuc = topla(s1, s2);
  } else if (islem == '-') {
    sonuc = cikar(s1, s2);
  } else if (islem == '*') {
    sonuc = carp(s1, s2);
  } else if (islem == '/') {
    sonuc = bol(s1, s2);
  }
  return sonuc;
};

const topla = function (s1, s2) {
  return s1 + s2;
};
const cikar = function (s1, s2) {
  return s1 - s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};

console.log(hesapla('+', 3, 5));
console.log(hesapla('-', 3, 5));
