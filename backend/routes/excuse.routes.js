const express = require("express");
const { getRandomExcuse } = require("../controllers/excuse.controller");
const router = express.Router();

router.get("/random", getRandomExcuse);

module.exports = router;