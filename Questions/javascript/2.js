// find output of below code

async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
  }
  async function async2() {
    console.log("async2 start");
    await async3();
    console.log("async2 end");
  }
  async function async3() {
    console.log("async3 Start");
    console.log("async3 End");
  }
  async1()
  
 