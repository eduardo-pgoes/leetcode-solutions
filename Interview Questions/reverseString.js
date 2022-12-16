/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = s.length - 1;
    for (let i = 0; i < Math.floor(n/2)+1; i++) {
        swap(s, i, n-i);
    }
};

function swap(arr, i, j) {
    let aux = arr[i];
    arr[i] = arr[j];
    arr[j] = aux;
}

let s = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"];
let output = ["a","m","a","n","a","P"," ",":","l","a","n","a","c"," ","a"," ",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"];
reverseString(s);
console.log(s);