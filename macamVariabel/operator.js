const nomer = [1, 2, 3];
const nobar = [].concat(nomer).concat(6, 5);

nobar.push(4);
console.log(nomer);
console.log(nobar.sort());
console.log(nomer === nobar);