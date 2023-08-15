// Rotate the array in an efficient way

approch1 : O(n^2)

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
