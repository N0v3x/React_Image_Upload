const express = require("express");
const router = express.Router();
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + ".jpg"); //Appending .jpg
  }
});

const upload = multer({ storage: storage }).single("avatar");

router.post("/upload", function(req, res, next) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
    } else if (err) {
      console.log(err);
    }
    console.log(req.file);

    // Everything went fine.
    res.send(req.file);
  });
});

module.exports = router;
