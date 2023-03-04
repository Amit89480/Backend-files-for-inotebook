const mongoose = require('mongoose')
const mongoURI=`mongodb+srv://pamit7407084:${process.env.PASSWORD}@inotebook.lzdjfob.mongodb.net/${process.env.USER}?retryWrites=true&w=majority`
 

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongo successfully")
    })
}

module.exports=connectToMongo