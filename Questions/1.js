// Accolite Digital :
// Write a program to generate an output array containing the Top 3 maximum
//  occurring words out of all the Strings.

let arr = [
  "Hello how are you",
  "Hello all is okay and lets start for Accolite interview,Accolite is a great company",
  "Hello wishing you luck for Accolite interview",
  "So lets start and rock it",
];
// Output: [“Hello”, “Accolite”, “and”]

const arrObj =  arr.map(str=>{

   return str.split(' ').reduce((acc,cv)=>{
        if(acc in cv) {
            acc[cv]++
        } else; {
            acc[cv]=1
        }
        return acc
    },{})
})

console.log(arrObj)