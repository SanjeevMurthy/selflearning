var step1 = require('./step1.js');


step1.get().then((success)=>{
  console.log("Successs ",success);
}).catch((error)=>{
  console.log("Error ",error);
})
