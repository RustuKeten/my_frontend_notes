//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ((birim zamanda -1- tane iş parçacığı <<kolumuz bir process ise parmaklarımız thread (iş parçacığı)'dir>> çalıştırıyor. Ancak Java, C++, Python'da multi-threaded aktif hale getirilebiliyor)) ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? ---------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basa riyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------

const zamanKaybettir = (ms)=>{
    const başla = new Date().getTime();
    while(new Date().getTime()< başla + ms){

    }
};
console.log("merhaba");
zamanKaybettir(3000);
console.log("nasılsın?");



























// //! zaman bekleme fonksiyonu, blocking code
// const bekle = (ms) => {
//     const start = new Date().getTime();
//     while (new Date().getTime()< start + ms) {
//         ;
//     }
// };


// console.log('hello');
// alert('itf') //! blocking code!
// console.time("timer");
// bekle(3000);
// console.timeEnd("timer");
// console.log('fs11');

//** asenkron(setTimeout) */
//*-----------------------------------------------------------------

// setTimeout( ()=>{ //!non-blocking code
//     console.log("Selamın Aleykum");
// },1000);

// console.log("aleyküm selam");

// console.log("merhaba");
// setTimeout(() => {
//   //!non-blocking code
//   console.log("Naptın müdür?");
// }, 500);

// console.log("keyfler nasıl");
// console.log("is there any problem?");

//*asenkron (setInterval , clearInterval)
//*-----------------------------------------------------------------

// let counter = 0;

// setInterval( ()=>{ //*bir saniyede bir artırıyor
//     console.log(++counter);
//     if(counter > 9 ){
//         clearInterval(sec1);
//     }
// },1000);

//? ÇÖZÜMLER:
//? -------------------------------
//* 1- XMLHttpRequest (Eski yöntem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlammis hali)

