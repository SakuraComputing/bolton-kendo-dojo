const express = require("express");
const route = express.Router();
// we need the file system to delete the images.
const fs = require("fs"); 

//multer config
const upload = require("./multer/storage");

//Model
const Image = require("./models/images");

route.delete("/:id", (req,res) => {
    //get the id from the ajax response
    //in this case the id is the name of the image
    //we need it in order to delete the image from the uploads directory
    Image.findByIdAndDelete(req.params.id)
        .then(image => res.json({ status: true }))
        .catch(err => res.status(404).json(err));
});
 

//-----Get all the images.
route.get("/all", (req, res)=>{
   //find the images inside mongodb
   Image.find()
        .then(images => res.json(images))
        .catch(err => console(err));
});


//-----Manage the post requests.
route.post("/", (req, res, next)=>{
    upload(req, res, function (err) {
        if(err) {
           console.log('An error has occured', err); 
        }  else {
            if(req.file == null || req.file === undefined || req.file === ""){
                //redirect to the same url            
                res.redirect("/memberphoto");            
            } else {
                // An error occurred when uploading
                if (err) {
                    console.log(err);
                } else {
                    //store the file name to mongodb    
                    //we use the model to store the file.
                    let image = new Image();
                    image.filename = req.file.filename;
                    image.description = req.body.description
            
                    //save the image to the database
                    image.save()
                        .then(image => res.json({ status: true }))
                        .catch(err => res.status(404).json(err));
                }
            }
        }      
    });     
});
module.exports = route;