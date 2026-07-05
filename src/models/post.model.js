const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
        required: [ true, 'User ID is required']
    },
    caption:{
        type: String,
        default: ""
    },
    imageUrl:{
        type: String,
        required: [ true, 'Image URL is required']
    }

});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;