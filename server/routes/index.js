const express = require("express");
const router = express.Router();

const img_router = require("./user/img_upload");

router.use("/image", img_router);

module.exports = router;
