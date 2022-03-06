const express = require("express");

const  recordController = require("../controllers/recordController");

const router = express.Router();

router.post('/', recordController.createrecord);

module.exports=router;