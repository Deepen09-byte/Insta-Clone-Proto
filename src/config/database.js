const mongoose = require('mongoose');
require('dotenv').config();
const dns =require ('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log('MongoDB connected');
}

module.exports = connectDB;