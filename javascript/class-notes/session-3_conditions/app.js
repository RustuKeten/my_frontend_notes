//  const n1= prompt('enter a number:');

//  if (n1 > 0){
//      console.log(`${n1} is positive`)
//  } else console.log (`${n1} is either 0 or negative`);


//  const n1= prompt('enter a number:');

//  if (n1 > 0){
//      console.log(`${n1} is positive`)
//  } else if (n1 < 0) {
//      console.log (`${n1} is either 0 or negative`);
//  } else {
//      console.log(`number is 0`);
//  }

//  const chest= prompt('beden olcunuzu giriniz');

// if (chest < 32 || chest > 49){
//      console.log(`üzgünüz, bedeniniz ${chest},33 bizde bulunmamaktadır.`)}
//     else if (32<= chest && chest <= 34) 
//      console.log (`${chest}bedeniniz XS`);
//   else if (35<= chest && chest <= 37) 
//     console.log (`${chest} bedeniniz S`);
//   else if (38<= chest && chest <= 40) 
//     console.log (`${chest}bedeniniz M`);
//   else if (41<= chest && chest <= 43) 
//     console.log (`${chest} bedeniniz L`);
//   else if (44<= chest && chest <= 46) 
//     console.log (`${chest} bedeniniz XL`);
//   else if (47<= chest && chest <= 49) 
//     console.log (`${chest} bedeniniz XXL`);
    
    // const size = prompt('Enter your size: ')

    // if (size >= 47 && size <50 ) {
    //     console.log(`Your size is XXL`);
    // }
    // else if(size >= 44 && size <47){ 
    //     console.log(`Your size is XL`);
    // }
    // else if(size >= 41 && size <44){ 
    //     console.log(`Your size is L`);
    // }
    // else if(size >= 38 && size <41){ 
    //     console.log(`Your size is M`);
    // }
    // else if(size >= 35 && size <38){ 
    //     console.log(`Your size is S`);
    // }
    // else if(size >= 32 && size <35){ 
    //     console.log(`Your size is XS`);
    // }
    // else{
    //     console.log('this is not valid size');
    // }


//example 3
      
// const n1 = +prompt('enter a number:');
// const n2 = +prompt('enter a number:');
// const n3 = +prompt('enter a number:');
// if (n1 > n2 && n1 > n3){
//     console.log(`${n1} is the greatest among ${n2} an ${n3} `);
// } else if (n2 > n1 && n2 > n3){
//     console.log(`${n2} is the greatest among ${n1}  an ${n3} `);
// } else 
//     console.log(`${n3} is the greatest among ${n2}  an ${n1} `);

// ternary operator
//example: program to check pass or fail
// let grade = prompt(`enter your score:`)
// //check the condition
// let result = (grade >= 50) ? `pass` : `fail`;
// console.log(`you ${result} the exam`);

// uzun yazımı
// const age = 13;
//     let result = ' ';
//      if (age >= 18) {
//         console.log('you are eligable to vote.');
//      } else {
//         console.log('you are not eligable to vote yet.');
//      }
//ternary yazımı
// let age = 16 ;
// let result = (age>= 18) ? `you can vote` : `you can not vote`;
//     console.log(result);

// required from user
//  const age = prompt(`enter your age:`) 
//  const result = (age >= 18)
//  ? 'you are eligible to vote.' 
//  : 'you are not eligible to vote yet';
//  console.log(result);

// const n1 =4;
// const result = n1 > 0
// ? (n1 =0 ? 'zero': ${n1} is postive : ${n1} is negative`:`$):;
// console.log(result);
// ternary olayını nested kullanmamaya çalışınız.
  

//example 4 can drive;
// evaluate if a human can drive a car or not

// let canDrive = false;
// const hasDriversLicense = false;
// const hasGoodVision = true;
// const isHandicapped = false;
// const usingRegularCar = false;
// const usingDisabledCar = true;

//uzun yazımı
// if (hasDriversLicense && hasGoodVision && !isHandicapped){
//     console.log(`usingRegularCar`);
// }
// else if (hasDriversLicense && isHandicapped && hasGoodVision){
//     console.log(`usingDisabledCar`);
// }
// else console.log(`you can not drive`)

//ternary yazımı
// result = hasDriversLicense && hasGoodVision 
//     ? ( !isHandicapped
//         ? 'can drive'
//         : ( !usingRegularCar
//             ?'can drive'
//             : 'cannot drive'
//         )
//         )
//     : 'can not drive'
//     console.log(result);

// console.log(018-013);

// console.log("-------------\nswitch case statements\n-------------")

// const product = 'eraser'
// let message;
// switch(product){
//     case'pencil':
//         message = 'pencil is 3 sents.';
//         break
//     case'eraser':
//         message = 'eraser is 4 sents.';
//         break
//     default:
//         message = 'pen is 5 sents.';
//         break
// }
// console.log(message);

// ! example-5  cw weekly program ❗your turn 🧑‍💻
// pazartesi salı çarşamba perşembe in class
// cuma team work
// cumartesi inclass + workshop
// pazar self study
// default yanlış gün girildi.

// const day = prompt('günü giriniz ve programınız öğrenmeyiniz:');
// let program='';
// switch(day.toLowerCase()){
//     case'monday':
//     case'tuesday':
//     case'wednesday':
//     case'thursday':
//         program = "your program is 'in class lesson'";
//         break
//     case'friday':
//         program = "your program is 'team work'";
//         break
//     case'saturday':
//         program = "your program is 'in class + workshop'";
//         break
//     case'sunday':
//         program = "your program is 'self study'";
//         break
//     default:
//         program = "enter a valid day!"
//         break
// }
// console.log(program);

// let text;
// let fruit = prompt(`Type your favorite fruit`);
// switch (fruit.toLocaleLowerCase()) {
//     case 'banana':
//         text=`I like banana.`
//         break;
//     case 'lime':
//     case 'lemon':
//     case 'orange':
//         text=`I am not a fan of ${fruit}.`
//         break;
//     case 'apple':
//         text=`I like apple.`
//         break;
//     default:
//         text='this is\'nt in my case.'
//         break;
// }
// console.log(text);

 const year = prompt("enter a year")
 const month = prompt("enter month of your year").toLowerCase
 let dayCount;
 
 switch (month) {
     case 'january':
     case 'march':
     case 'may':
     case 'july':
     case 'august':
     case 'october':
     case 'december':
         dayCount = `${month} is 31 days`
         break;
     case 'april':
     case 'june':
     case 'september':
     case 'november':
         dayCount = `${month} is 30 days`
         break;
     case 'february':
         if (year % 4 == 0 && year % 100 != 0 || year % 400 != 0)
            dayCount = 29;
         else dayCount = 28;
         break;
     default:
         break;
 }
 console.log(dayCount);
