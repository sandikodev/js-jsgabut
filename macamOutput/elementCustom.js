let tukangBakso = 1 + 1;
let babak = tukangBakso - 2;

// actioner v1
function klik1() {
    document.getElementById("masuk").innerHTML = "jumlah bakso " + babak;
}


// actioner v2
function klik2(){
    document.getElementById("masuk").innerHTML="mantab";
}
var klikan = document.getElementById("klik2");
klikan.addEventListener("click", klik2);

// actioner v3
