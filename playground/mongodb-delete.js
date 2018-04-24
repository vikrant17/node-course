const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID('5adecb8fbd289b6c4b17687f');
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').deleteOne({_id: obj}).then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  } , (err) => {
    console.log("Unable to fetch todos", err);
  });

});