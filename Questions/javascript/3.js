// Rotate the array in an efficient way
https://www.geeksforgeeks.org/array-rotation/

approch1 : O(d*n)

// array = [1,2,3,4,5] rotate=3

let arr = [1, 2, 3, 4, 5];

// 1st 23451
// 2nd 34512
// 3rd 45123

let rotate = 4;

function rotateArray(arr, rotate) {
  const totalRotaion = rotate % arr.length;
  console.log(totalRotaion);

  for (let i = 0; i < totalRotaion; i++) {
    let firstEl = arr.shift();
    arr.push(firstEl);
  }
  return arr;
}

console.log(rotateArray(arr, 11));

The time complexity of the code is O(d*n), where d is the number of rotations and n is the size of the array. 
