function getPromise1() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("promise1 reolved");
      resolve({
        "personalDetails":{
          "firstname":"sanjeev",
          "lastname":"murthy"
        }
      });
    },1000);
  })
}

function getPromise2() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("promise2 reolved");
      resolve({
        "preference":{
          "firstname":"sanjeev",
          "lastname":"murthy"
        }
      });
    },1000);
  })
}
function getPromise3() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("promise3 reolved");
      resolve({
        "orderPreference":{
          "firstname":"sanjeev",
          "lastname":"murthy"
        }
      });
    },1000);
  })
}
function getPromise4() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("promise4 reolved");
      resolve({
        "addressDetails":{
          "firstname":"sanjeev",
          "lastname":"murthy"
        }
      });
    },1000);
  })
}
function getPromise5() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("promise5 reolved");
      // resolve({
      //   "segments":{
      //     "firstname":"sanjeev",
      //     "lastname":"murthy"
      //   }
      // });
      reject("Failed in getting promise5");
    },1000);

  })
}

let promise1 = getPromise1();
let promise2 = getPromise2();
let promise3 = getPromise3();
let promise4 = getPromise4();
let promise5 = getPromise5();

Promise.all([promise1,promise2,promise3,promise4,promise5]).then((result)=>{
  console.log("All promise reolved");
  console.log("result : \n",result);
  try{
    let obj = Object.assign({},...result);
    console.log("Result : ",obj);
  }catch(ex){
    console.log("exception ",ex);
  }
}).catch((reason)=>{
  console.log("Promise rejected");
  console.log("Reason : ",reason);
});
