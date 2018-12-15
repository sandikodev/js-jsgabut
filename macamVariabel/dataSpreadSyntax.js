// Spread syntax allows an iterable such as an array expression
// or string to be expanded in places where zero or more arguments 
// (for function calls) or elements (for array literals) are expected,
// or an object expression to be expanded in places where zero or more 
// key-value pairs (for object literals) are expected.

const list = [1, 2, 3, 4];

function macam(x, y, z) {
    return x + y + z;
}

function macam1(x, y, z, o) {
    return x + y + z + o;
}

console.log(macam1(...list)); /* menggunakan spreadsyntax */
console.log(macam.apply(null, list)); /* dengan target ->null */
console.log(macam.apply([], list)); /* dengan target ->Object */
console.log(macam.apply({}, [1, 2, 3])); /* dengan target ->Object */
console.log(macam1.length); /* jumlah parentObject yang akan digunakan */




// percobaan1
const jumlah = [6, 4, 3];

function toko(buku, pensil, penggaris) {
    return {
        buku,
        pensil,
        penggaris
    };
}
console.log(toko(...jumlah)); /* menampilkan tiap objek ->toko dengan jumlah */
console.log({ ...jumlah
}); /* menampilkan tiap objek ->default dengan jumlah */
console.log([...jumlah]); /* menampilkan jumlah dalam bentuk array */
console.log(jumlah); /* menampilkan jumlah dalam bentuk array */
console.log(...jumlah); /* menampilkan jumlah tanpa pembungkus */


// percobaan2
const jumlah1 = [1, 2];

function toko1(buku, pensil, penggaris) {
    return {
        buku,
        pensil,
        penggaris
    };
}

console.log(toko1.apply(null, jumlah1)); /* penggunaan spreadsyntax berlaku sekali */
console.log(toko1(-1, ...jumlah1)); /* penggunaan spreadsyntax berlaku berkali kali */


// percobaan3
const nomer = [2001, 04, 22];

function tanggalan(taun, bulan, tanggal) {
    return {
        taun,
        bulan,
        tanggal
    };
}

console.log(tanggalan.apply(null, nomer));
console.log(new Date(...nomer));