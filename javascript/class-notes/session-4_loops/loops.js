/*for loop*/
// let sum = 0;
// for (let i = 0; i < 7; i++) {
//   // console.log(i);
//   sum += i;
// }
// console.log(`total ${sum}`);

// /*while loop*/
// let count = 1;
// while (count < 10) {
//   console.log(count);
//   count += 2;
// }


/*do...while*/
// let count =1;
// do{
//   console.log(count);
//   count++
// }while(count<5)

// for (let i=1; i<=10 ; i++){
//   console.log("Merhaba");
// }

console.log('***************loops***************');

// Math.random()

// for(let i=1; i <= 5; i++){
//   const randomSayı = Math.random();
//   console.log(randomSayı);
// }
// for(let i=1; i <= 5; i++){
//   const randomSayı = Math.random()*100+1;
//   console.log(randomSayı);
// }
// for(let i=1; i <= 5; i++){
//   const randomSayı = Math.trunc(Math.random()*100+1);
//   console.log(randomSayı);
// }
  // Math.random() random sayı atar.
  // Math.trunc() kesirli sayıları tam yazdırır.
  // Math.floor() alta yuvarlıyor.
  // Math.ceil() üste yuvarlar
  // Math.round() en yakın değere yuvarlar

// const n = prompt("n sayısını giriniz:")
// let toplam = 0;
// for(let i=1; i<=n; i++){
//   toplam = toplam + i;
// }
// console.log(toplam);

//örnek soru: girilen sayının asal mı değil mi olduğunu bulan bir döngü yazınız?

//***************************While*//***********//////// */ */

// let i=1;
// while (i <= 6) {
//   console.log("merhaba");
//   i++;
// }
//? örnek
// let not = prompt("lütfen notunuzu giriniz:");
// while ( not<0 || not>100){
//   console.log('notunuz yanlış değerler 0-100 olmalıdır');
//   not = prompt("lütfen notunuzu giriniz:");
// }
// console.log('girdiğiniz not ', not);

//*************************do-while************ */

// let i=0;
// do{
//   console.log('merhaba-', i);
//   i++;
// } while(i<= 5);
// let not
// do {
//   not = prompt("lütfen notunuzu giriniz:");
//   if(not < 0 || not > 100){
//     alert("notunuz yanlış değerler 0-100 olmalıdır");
//   }
// } while (not < 0 || not > 100);
// console.log('girdiğiniz not ', not);

//! q harfi verene kadar girdi alan kod yazınız*//////
let enterGrade;

enterGrade=prompt("enter a student grade(0-100):");
while (enterGrade == "Q" || enterGrade == "q" || enterGrade > 0 || enterGrade < 100) {
  if(enterGrade < 0 || enterGrade >100);
  console.log("enter a valid number between 0-100:");
  
}
else if(enterGrade == "Q" || enterGrade == "q"){
  console.log("quiting...");
  break;
}else {
  console.log(`Grade ${enterGrade}`);
}
enterGrade = prompt("enter a student grade(0-100):");