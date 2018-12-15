function tambahkanBaru(constructor,args){
    function partial(){
        return constructor.apply(this, args);
    }
    if (typeof constructor.prototype === "object"){
        partial.prototype=Object.create(constructor.prototype);
    }
    return partial;
}

function coba(){
    console.log("tampi " + arguments.length);
    console.log(arguments);
    this.prop1="nilai1";
    this.prop2="nilai2";
}

var macam=['halo','apakabar','oke','siap',null];
var cobaDenganMacam = tambahkanBaru(coba,macam);

console.log(new cobaDenganMacam());