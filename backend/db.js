const mongoose = require('mongoose');
const MONGO_URI=process.env.MONGO_URI;
const mongoURI = `${MONGO_URI}`;
mongoose.set('strictQuery', false);
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, () => {
        console.log("Mongo connected");
    });
    
}
module.exports = connectToMongo;