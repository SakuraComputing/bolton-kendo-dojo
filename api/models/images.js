let mongoose = require("mongoose");

//create the Schema
let imagesSchema = mongoose.Schema({
    filename: {
        type : String,
        required: true
    },
    description: {
        type: String
    },
        Date: {
        type: Date,
        default: Date.now
    }    
});

let Image= module.exports= mongoose.model("Image", imagesSchema);
//just the image is needed.