// const cars=[];
// cars[0]="Volvo";
// console.log(cars);
// console.log(typeof cars);
// cars.unshift("BMW")

// console.log(cars);

// const arr =[1,2,3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]**3);    
// }
// arr.forEach(cube);

// function(cube){
//     console.log(num **3);
// }

// const points = new Array(5);
// console.log(points);

// var a = ["dog", "lion", "hen"];
// a[100] = "horse";
// console.log(null);

// let score = Array(10);
// console.log(typeof score);

// const myArr = [1, 2, 3];
// const myObj = { firstName: "John", lastName: "Doe", age: 24 };
// console.log(typeof myArr); // object
// console.log(Array.isArray(myArr)); // true
// console.log(myArr instanceof Array); // true
// console.log(typeof myObj); // object
// console.log(Array.isArray(myObj)); // false
// console.log(myObj instanceof Array); // false

// let dailyActivities = ["eat", "work", "sleep"];

// // add an element at the end
// const newLength = dailyActivities.push("exercise");
// console.log(dailyActivities); //  ['eat', 'work', 'sleep', 'exercise']
// console.log(newLength);

// let dailyActivities = [ 'eat', 'work', 'sleep'];

// //add an element at the start
// const newLength = dailyActivities.unshift('get dressed'); 

// console.log(dailyActivities); // ['get dressed', 'eat', 'work', 'sleep']
// console.log(newLength);

// let number = [1,2,3,4,5,"ensar","sami"];
// console.log(number.push("burak"), number);
// console.log(number.unshift("melih"),number);
// console.log(number.pop(), number);
// console.log(number.shift(),number);
// console.log(number[1]);
// number[1]=32;
// console.log(number);

// const languages1 = ["JavaScript", "Python", "Java"];
// const languages2 = ["C", "C++"];

// let newWord = languages1.concat(languages2).concat(12);
// console.log(newWord);

let arr =  ['a', 'b', 'c', 'd'];
console.log(arr.join(''));//returns 'abcd'
console.log(arr.join('-'));//returns 'a-b-c-d'
console.log(arr)//returns ['a'// 
const languages1 = ["JavaScript", "Python", "Java"];

console.log(languages1.join());

const cwPaths = [
  "Full-Stack",
  "AWS-Devops",
  "Data Science",
  "Cyber Security",
  "Salesforce",
];
console.log("Original Array: " + cwPaths);

// reversing array order
reversed_arr = cwPaths.reverse();

// reverse() modifies the original array
console.log("Array after reverse(): " + cwPaths);

// reverse() also returns the reversed array
console.log("Return Value of reverse(): " + reversed_arr);

const message = ["Yourself", "Reinvent", "Clarusway"];
console.log(message.reverse().reverse());

const numbers = [0, 3, 2,1, 12, 10, 50, 30,'4'];
console.log(numbers.sort((a, b) => a - b));


let scores = [0, 3, 2, 1, 12, 10, 50, 30, "4"];
let deletedScores = scores.splice(0, 3,'david','galip');
console.log(scores); // [42, 17]
console.log(deletedScores); // [15, 21, 18]

let scores1 = [0, 3, 2, 1, 12, 10, 50, 30, "4"];
console.log(scores1.splice(2,3,"z"));
console.log(scores1);


const colors = ["Red", "Yellow", "Green", "Blue"];
const slicedColors = colors.slice(1, 3);

const newColors = colors.slice();

console.log(colors);
console.log(slicedColors);
console.log(newColors); 

const colors2 = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];

console.log(colors2.indexOf("Green")); // 2
console.log(colors2.indexOf("Green",3)); // 5
console.log(colors2.indexOf("green")); // -1

const colors3 = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];

console.log(colors3.lastIndexOf("Green")); // 5
console.log(colors3.lastIndexOf("Blue",3)); // 2
console.log(colors3.lastIndexOf("green")); // -1