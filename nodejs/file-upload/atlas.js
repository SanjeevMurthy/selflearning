var MongoClient = require('mongodb').MongoClient,
Grid = require('mongodb').Grid;
var uri = "mongodb://admin:admin@cluster0-shard-00-00-kf2pt.mongodb.net:27017,cluster0-shard-00-01-kf2pt.mongodb.net:27017,cluster0-shard-00-02-kf2pt.mongodb.net:27017/notes?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

MongoClient.connect(uri, function(err, db) {
  if(err) return console.dir(err);

  var grid = new Grid(db, 'fs');
  var buffer = new Buffer("Hello world");
  grid.put(buffer, {metadata:{category:'text'}, content_type: 'text'}, function(err, fileInfo) {
    if(!err) {
      console.log("Finished writing file to Mongo");
    }
  });

  //db.close();
});






// var filesCollection = db.collection('files');
// filesCollection.insert({
//   "name":"test-file.js",
//   "constent":"test file"
// },function(err,response){
//   console.log("Error ",err);
//   console.log("Result ",response);
//
// });
