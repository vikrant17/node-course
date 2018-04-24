const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID('5addc10e323a430ef8e0e16a');
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate(
    {_id: obj}, 
    {
      $set: {
        name: 'Vikrant'
      },
      $inc: {
        age: 2
      }
    },
    {
      returnOriginal: false
    }
  ).then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  } , (err) => {
    console.log("Unable to fetch todos", err);
  });

});