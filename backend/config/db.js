const mongoose = require('mongoose');

const connectToDB = async () =>{
    try{
        const createConnection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${createConnection.connection.host}` );
    }
    catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1)
    }
}

module.exports = connectToDB