// const kisilerObject = {
//   ahmet: {
//     ad: "Ahmet",
//     soyad: "Yilmaz",
//     yas: 30,
//     is: "developer",
//     diller: ["C", "C++", "Pyhton", "JS"],
//     maas: 120000,
//   }};
//   console.log(kisilerObject.ahmet.ad);
//   console.log(kisilerObject.ahmet.diller[2]);
//   kisilerObject.ahmet.ad = "kucuk ahmet";
//   console.log(kisilerObject.ahmet.ad);
//   kisilerObject.ahmet["ad"] = "guccuk ahmet";
//   console.log(kisilerObject.ahmet);

//   kisilerObject.ahmet.diller.push("java");
//   console.log(kisilerObject.ahmet.diller);
const kisiler = [
  {
    name: "Ahmet",
    surname: "Can",
    job: "developer",
    age: 30,
  },
  {
    name: "Mehmet",
    surname: "Baki",
    job: "tester",
    age: 35,
  },
  {
    name: "Nur",
    surname: "Ersan",
    job: "team lead",
    age: 40,
  },
  {
    name: "Merve",
    surname: "Veli",
    job: "developer",
    age: 26,
  },

  {
    name: "Ruzgar",
    surname: "Kuzey",
    job: "tester",
    age: 24,
  },
];
// console.log(kisiler[].job);
kisiler.forEach((kisi)=> console.log(kisi.job));

const newAge = kisiler.map((x)=> x.age +1 );
console.log(newAge);

const elAlistirmasi = kisiler.map((x) => ({
  adlar: x.name.toLocaleLowerCase() + "_" + x.surname.toLocaleLowerCase(),
  yas:--x.age,
}));  
console.log(elAlistirmasi);
const newFullName = kisiler.map((x) => ({
    fullname: `${x.name}+${x.surname}`.toLowerCase(),
    yas: --x.age,
}));
console.log(newFullName);

kisiler.filter((x) => x.age > 33).forEach((y)=>console.log(y.name));

const array = new Array();
kisiler
.filter((x)=>(x.age<33))
.forEach((x)=>array.push(x.name));

console.log(array);

kisiler.filter((x)=> x.job ==='developer').map((x)=>array.push(x.name+" "+x.age))
console.log(array);