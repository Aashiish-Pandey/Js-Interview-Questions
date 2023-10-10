const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;
// 1st approch 

// function createChunk(arr, chunkSize) {
//   const chunkedArray = [];

//   for (let i = 0; i < arr.length; i=i + chunkSize) {
//     chunkedArray.push(arr.slice(i, i + chunkSize));
//   }
//   return chunkedArray
// }

// console.log(createChunk(arr, chunkSize));


//2nd approch using reduce 


