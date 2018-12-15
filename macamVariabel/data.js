var orang = {
    'sulastri': 'jogja',
    'paijo': 'ngabean',
    'tukimin': 'semarang'
};
console.log("default");
console.log(orang);

// var.isiVarYangAda = "string" <-- mereplace string dari isiVarYangAda
orang.sulastri = 'magelang';
console.log(orang);

// var.isiVarYangBeda = "string" <-- nambah var dan string string dari isiVarYangAda
// dalam penambahan var |default akan dilakukan secara fifo (first in first out)
var orangb = orang;
orangb.kusman = 'boyolali';
console.log(orangb);

