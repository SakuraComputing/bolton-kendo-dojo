const express = require("express");
const route = express.Router();
// we need the file system to delete the images.

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
    //let multer manage the requests
    //which are passed to the upload function
    //by the main request.
    //the function if everything went right
    //will upload the file without cheking if already exists

    // ---------- MULTER UPLOAD FUNCTION -------------
    upload(req, res, function (err) {
        console.log(req.file);
        // need to check if the req.file is set.
        if(req.file == null || req.file === undefined || req.file === ""){
            //redirect to the same url            
            res.redirect("/");
            
        } else {
            // An error occurred when uploading
            if (err) {
                console.log(err);
            }else{
                // Everything went fine
                //define what to do with the params
                //both the req.body and req.file(s) are accessble here
                console.log(req.file);
                
                //store the file name to mongodb    
                //we use the model to store the file.
                let image = new Image();
                image.image = req.file.filename;
        
                //save the image
                image.save()
                    .then(image => res.json({ status: true }))
                    .catch(err => res.status(404).json(err));
            
            }
    
        }

    });     
});

//export the module
module.exports = route;