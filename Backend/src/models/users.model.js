const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [ true, 'Username is required'],
        unique: [ true, 'Username already exists' ]
    },
    email: {
        type: String,
        required: [ true, 'Email is required'],
        unique:[true, 'Email already exists']
    },
    password:{
        type: String,
        required: [ true, 'Password is required']
    },
    bio:{
        type: String,
        default: ""
    },
    profileImage:{
        type: String,
        default:"https://ik.imagekit.io/deepen09/insta%20default%20pfp.webp"
    }

})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
