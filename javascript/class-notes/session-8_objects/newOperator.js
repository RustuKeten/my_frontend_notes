const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

const [ name1,name2,name3] = names;
console.log(name1);


//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

/* REST: (Arrays) */ //? en sonda olacaktır.
const vehicles = ["bmw", "reno", "mercedes", "ferrari", "anadol"];
const [vec1,vec2,...restVehicles]=vehicles;

console.log(vec1,vec2);
consol

// REST Objects
const personel = {
    pName: "john",
    surname: "smith",
    job: "dev",
    age: 30
};
const{ pName, job,...surnameAge} = personel;
console.log();