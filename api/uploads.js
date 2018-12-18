const express = require("express");
const route = express.Router();
// we need the file system to delete the images.
const fs = require("fs"); 
const passport = require('passport');

//multer config
const upload = require("./multer/storage");

//Model
const Image = require("./models/images");

route.delete("/:id", passport.authenticate('jwt', { session: false }), (req,res) => {
    //get the id from the ajax response
    //in this case the id is the name of the image
    //we need it in order to delete the image from the uploads directory
    Image.findById(req.params.id)
        .then(image => {
            const realFilename = image.filename;
            Image.findByIdAndDelete(req.params.id)
            .then(image => {
                let $filePath= "./public/uploads/" + realFilename
                fs.unlinkSync($filePath, (err)=>{
                    if(err){
                        //send an error if the image was not deleted
                        console.log("couldnt delete " + req.params.id + " image");
                    }  
                });
                res.json({ success: true });
            })
            .catch(err => res.status(404).json(err));
    
        })
        .catch(err => res.status(404).json({ imagenotfound: 'No image found unable to delete'}));
});
 

//-----Get all the uploads.
route.get("/all", (req, res)=>{
   //find the images inside mongodb
   Image.find()
        .then(uploads => res.json(uploads))
        .catch(err => console(err));
});


//-----Manage the post requests.
route.post("/", passport.authenticate('jwt', { session: false }), (req, res, next)=>{
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
                    image.title = req.body.title
                    image.eventDate = req.body.eventDate
            
                    //save the image to the database
                    image.save()
                        .then(uploads => res.json(uploads))
                        .catch(err => res.status(404).json(err));
                }
            }
        }      
    });     
});
module.exports = route;