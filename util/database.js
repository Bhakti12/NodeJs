// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const MongoConnect = callback => {
//   MongoClient.connect('mongodb+srv://sanghanibhakti:O2ISBXIiFmlJA0yl@cluster0.jhthccl.mongodb.net/Demo?retryWrites=true&w=majority')
// .then(client=>{
//   console.log('connected!');
//   _db = client.db();
//   callback();
// })
// .catch(err=>console.log(err));
// };

// const getDb = () => {
//   if(_db){
//     return _db;
//   }
//   throw 'No database found!';
// }

// exports.MongoConnect = MongoConnect;
// exports.getDb = getDb;
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://sanghanibhakti:O2ISBXIiFmlJA0yl@cluster0.jhthccl.mongodb.net/Demo?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;