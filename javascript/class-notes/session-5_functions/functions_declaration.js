// function greet(){
//     console.log(`hello world!`);
// }
// greet()


//*! take an input from user and console input using a funtion */
// function greet(name, lastName){
//     console.log(`hello world! `+ name+ ' ' + lastName);
// }
// let isim = prompt("please enter your name:")
// let soyisim = prompt("please enter your Lastname:")
// greet(isim, soyisim);

//************function declaration************/
//!return almamış komutlara void function denir.
//!parametre almamış
function yazdır(){ //!decloaration/
    console.log('merhaba');
}
yazdır();//!invoked /
yazdır();//!invoked /
yazdır();//!invoked /

console.log(typeof yazdır); //* tipi fonksiyon

//**örnek 2 parametreli */
//************************************************/

function selamla(isim){
    console.log(`Merhaba ${isim}`);
}
selamla(`erol`)
selamla(`erhan`)
selamla(`jason`)
//!bir parametreyi çağırma sırasında kullanmaz isek hata vermemesi için defult bir değer atarız.
//!örenkteki ='' kısmı atanmamış parametre yerine boşluk atar ve eksik bırakmamış oluruz.
function selamla(isim, soyisim =''){
    console.log(`Merhaba ${isim} ${soyisim}`);
}
selamla(`erol`,`evgin`)
selamla(`erhan`)
selamla(`jason`)
//********************************************** */
//****örnek-2-parametreli ve dönüşlü****************** */

// function yasHesapla(name, year){
//     let mesaj =`${name}'in yaşı ${2022-year}dir.`
//     return(mesaj)
// }

// console.log(yasHesapla("frk", 1983));

function yasHesapla(name, year){
const mesaj1 =`${name}'in yaşı ${new Date().getFullYear()-year}dir.`
    return(mesaj1);
}

//**************************************************** */
//**************************örnek4: */

console.log(tekÇift(5));
console.log(tekÇift(2));

function tekÇift(number){
   return number%2 ===0 ? `${number} çifttir`: `${number} tektir`; 
}
