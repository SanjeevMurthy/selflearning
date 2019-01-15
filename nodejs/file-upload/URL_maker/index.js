var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('uuid.txt'),
    console: false
});

var count = 0;
var URL = "/grocerypreference/?customerid="



var options = {
  flags: 'a',
  defaultEncoding: 'utf8',
  fd: null,
  mode: 0o666,
  autoClose: true
};

var GRPR = fs.createWriteStream('./GRPR_URL_UUID_CID.txt',options)
rd.on('line', function(line) {
    var data = URL+line+"\n";
    console.log("URL : ",data);
    GRPR.write(data);
});
