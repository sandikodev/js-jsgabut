const nomer = [1, 2, 3];
const nobar = [].concat(nomer).concat(6, 5); /* nobar adalah aray + nomer + [6,5] */
nobar.push(4); /* nobar push 4 */
console.log(nomer); /* nomer = 1,2,3 */
console.log(nobar.sort()); /* nobar = 1,2,3,4,5,6 */
console.log(nomer === nobar); /* bool nomer=nobar adalah false */