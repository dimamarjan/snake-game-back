const express = require("express");
const router = express.Router();
const validator = require("../../middlewares/validators");
const controllers = require("../../controllers");

router.post("/check", validator.checkUsers, controllers.checkUsers);
router
    .get("/", controllers.getUsers)
    .post("/", validator.addUsers, controllers.addUsers);

module.exports = router;
