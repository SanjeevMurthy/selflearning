function get(input){
  return new Promise((resolve,reject)=>{
    if(input){
      resolve("true");
    }else{
      reject("False")
    }
  });
}

module.exports = {
  get:get
}
