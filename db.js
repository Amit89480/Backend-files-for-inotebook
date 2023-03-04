const mongoose = require("mongoose");

const uri = 'mongodb://pamit7407084:8PkP8xOva9Qmpdl0@ac-6xf4ezt-shard-00-00.lzdjfob.mongodb.net:27017,ac-6xf4ezt-shard-00-01.lzdjfob.mongodb.net:27017,ac-6xf4ezt-shard-00-02.lzdjfob.mongodb.net:27017/pamit7407084?ssl=true&replicaSet=atlas-o504gr-shard-0&authSource=admin&retryWrites=true&w=majority';

const connectToMongo = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set("strictQuery", true);

module.exports = connectToMongo;