const newRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");

function route(app) {
  app.use("/courses", coursesRouter);
  app.use("/news", newRouter);
  app.use("/", siteRouter);
  // Default route
}

module.exports = route;
