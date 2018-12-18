let mongoose = require("mongoose");

//create the Schema
let imagesSchema = mongoose.Schema({
    filename: {
        type : String,
        required: true
    },
    title: {
        type: String
    },
    eventDate: {
        type: Date
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }    
});

let Image= module.exports= mongoose.model("Image", imagesSchema);
//just the image is needed.