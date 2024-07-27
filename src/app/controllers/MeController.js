const Course = require("../models/Course");

class MeController {
  storedCourse(req, res, next) {
    Course.find({})
      .lean()
      .then((courses) => res.render("me/storedCourse", { courses }))
      .catch(next);
  }
}

module.exports = new MeController();