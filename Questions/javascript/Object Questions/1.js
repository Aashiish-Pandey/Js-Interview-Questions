// input :
const companies = [
    { name: "Company A", id: 1 },
    { name: "Company B", id: 2 },
    { name: "Company C", id: 3 },
    { name: "Company A", id: 4 },
    { name: "Company B", id: 2 }
  ];

//   expected output :

  // {
  // Company A: 2
  // Company B: 1
  // Company C: 1
  // }

  const newObj = companies.reduce((acc,cv)=>{
    let name = cv.name
    if(!(name in acc)) {
        acc[name]=[cv]
    } else {
        acc[name].push(cv)
    }
    return acc
  },{})

  console.log(newObj)


  // let arr = Object.values(newObj)

  // let newArray = arr.map(inArr=>{
  //   let ids = 
  // })