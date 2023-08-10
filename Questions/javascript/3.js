// Rotate the array in efficient way

// array = [1,2,3,4,5] rotate=3

let arr = [1, 2, 3, 4, 5];

// 1st 23451
// 2nd 34512
// 3rd 45123

let rotate = 2;

function rotateArray(arr, rotate) {
  let i = 1;
if(i===arr.size) {
    console.log(i)
    return arr
} else {
    while ( i<=rotate) {
        console.log(i)
        arr.push(arr.shift());
        i++

      }
    
      return arr;
}
  
}

console.log(rotateArray(arr, 10));
