var MongoClient = require('mongodb').MongoClient
var uri = "mongodb://admin:admin@cluster0-shard-00-00-kf2pt.mongodb.net:27017,cluster0-shard-00-01-kf2pt.mongodb.net:27017,cluster0-shard-00-02-kf2pt.mongodb.net:27017/notes?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";


var state = {
  db: null,
}

exports.connect = function(done) {
  if (state.db) return done()

  MongoClient.connect(uri, function(err, db) {
    if (err) return done(err)
    state.db = db
    done();
  });
}

exports.get = function() {
  return state.db
}

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err);
    });
  }
}
