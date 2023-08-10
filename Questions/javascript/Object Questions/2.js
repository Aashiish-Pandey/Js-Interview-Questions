//  Asked in Upgrad
// input : 

const temp = [
    {
      key: "a",
      val: "15"
    },
    {
      key: "b",
      val: "20"
    },
    {
      key: "a",
      val: "15"
    },
    {
      key: "b",
      val: "20"
    },
    {
      key: "f",
      val: "10"
    },
    {
      key: "a",
      val: "15"
    },
    {
      key: "b",
      val: "20"
    }
  ]
  
  
  
  // Expected Output
  
  
  const temp1 = [
    [{
      key: "a",
      val: "15"
    },
    {
      key: "a",
      val: "15"
    },
    {
      key: "a",
      val: "15"
    }],
    [{
      key: "b",
      val: "20"
    },
    {
      key: "b",
      val: "20"
    },
    ,
    {
      key: "b",
      val: "20"
    }],
    [{
      key: "f",
      val: "10"
    }]
  ]


  const answerArray = temp.reduce((acc,cv)=>{
    let key =cv.key
    if(!(key in acc)) {
        acc[key]=[cv]
    } else {
        acc[key].push(cv)
    }
    return acc
  },{})

  console.log(Object.values(answerArray))