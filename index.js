const connectToMongo = require("./db");
const express = require('express');
const { mongoose } = require("mongoose");
const cors=require('cors')

const app = express()

const port = 5000|| process.env.PORT
// for importing moongose

app.use(cors())
app.use(express.json())//we are using this for using middleware

//Available Routes

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
const connection= async()=>{
 try {
  await connectToMongo();
  await app.listen(port, () => {
    console.log(`iNotebook Backend starts at ${port}`)
  });
 } catch (error) {
  console.log(error);
 } 
}

connection();


