// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

//* Örnek1:
//*************************************************************/

const topla = (x,y) => x + y;
//!ARROW FONKS BİRDEN ÇOK SATIR KULLANICAKSAN SÜSLÜ PARENTEZ KULLANILIR VE O ZAMAN RETURN YAZILMALIDIR. */
const usAl = (t,u) => {
    return t**u;
}
const usAl2 = (t, u) => t ** u;
console.log('SONUÇ = ', topla(5,3));
console.log('US: ', usAl(2,3));
console.log('US: ', usAl2(2,3));