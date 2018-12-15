var dataa = {
    'rumah': 'bantul',
    'nama': 'sandiko',
    'nomer': 23
};

var datab = Object.assign({}, dataa);
datab.rumah = 'yogyakarta';
console.log(datab);