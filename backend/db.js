const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://rr8973571:Pa3HwgShsE82FTD8@cluster0.n5pcljp.mongodb.net/"
mongoose.set('strictQuery', false);
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, () => {
        console.log("Mongo connected");
    });
    
}
module.exports = connectToMongo;