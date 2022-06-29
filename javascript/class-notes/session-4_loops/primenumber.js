// const number = Number(prompt(`Please enter a number! and learn is it prime number?:`));
// let primeNumber;
// let prime = true;
// for(let i=2; i<number; i++){
//     if(number%i==0){
//         prime=false;
//         break
//     }
// }

//** `Q` character */
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