const express = require("express");
const router = express.Router();
const { getData } = require("./homeController");
const { addone } = require("./addflowerController");
const errors = require("./errors");

const { getFlower } = require("./flowerController");

router.get("/", getData);

router.get("/flower/:id", getFlower);

router.post("/addFlower", addone);


router.use(errors.pageNotFound);
router.use(errors.serverError);

module.exports = router;
