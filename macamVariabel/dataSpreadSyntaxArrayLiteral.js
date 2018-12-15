// powerfull literal syntax
let anu = ['sendok', 'garpu', 'mangkok'];
let anu2 = ['kompor', ...anu, 'wajan'];

console.log(anu2);

// powerfull array copies
let macem = [1, 2, 3];
let macem2 = [...macem];
macem.push('mangkok');
console.log(macem);
console.log(macem[3]);
console.log(macem2);

// unsuitables array literalSpreadSyntax
let coba = [
    [1],
    [2],
    [3]
];
var coba2 = {...coba};
console.log(coba2);

// seems like
let satunya = {
    'a': 1,
    b: 2,
    c: 3
};
let satunya2 = satunya;

// ya!!.. seperti melakukan push dalam array. namun ini object!!
satunya2 = Object.assign({c: 5, d: 6}, satunya); /* kedua perintah ini mirip */
satunya2.x = 22; /* kedua perintah ini mirip */
console.log(satunya2);


// Spread syntax effectively goes one level deep
// while copying an array. Therefore, it may be
// unsuitable for copying multidimensional arrays 
// as the following example shows (it's the same 
// with Object.assign() and spread syntax).
var ty=[[1],[2],[3]];
var tx=[...ty];
/* aku gak patio dong*/
tx.shift().shift();
/* tur intine spdSyntax*/
/* hanya berjalan di kedalaman1level */
console.log(tx);