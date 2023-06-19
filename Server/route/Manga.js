const express = require("express");
const router = express.Router();
const {Home} = require("../controller/Manga");

router.get("/*",Home);


module.exports = router;
