const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    console.log('storade.js: ', __dirname);
    cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname))
  }
});

const upload = multer({storage: storage}).single('image');

module.exports = upload;
