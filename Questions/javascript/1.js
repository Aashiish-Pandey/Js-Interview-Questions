// Accolite Digital :
// Write a program to generate an output array containing the Top 3 maximum
//  occurring words out of all the Strings.
// Output: [“Hello”, “Accolite”, “and”]

let arr = [
  "Hello how are you",
  "Hello all is okay and lets start for Accolite interview,Accolite is a great company",
  "Hello wishing you luck for Accolite interview",
  "So lets start and rock it",
];

const countObj ={}
let ans

for(let i =0;i<arr.length;i++) {

     ans = arr[i].split(' ').reduce((acc,cv)=>{
        if(cv in acc) {
            acc[cv]++
        } else {
            acc[cv]=1
        }
        return acc
    },countObj)
}

console.log(ans)