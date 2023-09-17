const connectToMongo = require('./db');
const express = require('express')

var cors = require('cors') 
const port= process.env.port|| 5000;
connectToMongo();
const app = express()

app.get('/',(req,res)=>{
  res.send("hello")
})
app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})