
var step2 = require('./step2.js');

function get(){
  return new Promise((resolve1)=>{
    step2.get(true).then((data)=>{
      resolve1(data);
      //return data;
    }).catch((reason)=>{
      //reject1(reason);
      //return reason;
    });
  });
}

module.exports = {
  get:get
}
