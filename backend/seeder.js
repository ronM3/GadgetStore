const mongoos = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');
const connectToDB = require('./config/db');

dotenv.config();

connectToDB();

const importData = async () =>{
    try{
       await Order.deleteMany()
       await Product.deleteMany()
       await User.deleteMany()
       await User.insertMany(users)
    }
    catch(error){
        
    }
}