// console.log(a);
// var a =3;
// console.log(a);


// console.log(b);
// let b =1;

// let c='2';
// let d =2;

// console.log(typeof c);
// console.log(typeof d);

// let e = +prompt('Bir şey yazınız :');123
// console.log(typeof e);

// let f = null;
// console.log(typeof f  );

// let g=3.15;
// let h=1_000_000;
// console.log(h);

// let i = 999_999_999_999_999;
// console.log(i)
// let j = 999_999_999_999_868_123;
// console.log(j)

// let k = +prompt('Bir şey yazınız :');
// console.log(typeof k, k);

// console.log(isNaN(k))

// let m =`Hello World`;
// let n = "Merhaba Dunya";
// let p = 'Merhaba JS';
// console.log(typeof m,n,p);

// let userName='Mark';

// let p = `Merhaba ${userName}`;
// console.log(p);

const myCar = {
    make : 'ford',
    model : 'Mustang',
    year : 1965,
    color : 'Black'
}
// console.log(myCar);

myCar.color ='Red';
myCar.sunRoof = true;
console.log(myCar);

myCar.age = function(current) {
    console.log(current - this.year)
}

console.log(myCar);

myCar.age(2022)

delete myCar.sunRoof;

console.log(myCar);
