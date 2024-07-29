const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get("/stored/courses", meController.storedCourse);

router.get("/strash/courses", meController.strashCourse);

module.exports = router;
