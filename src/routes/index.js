const newRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const meRouter = require("./me");

function route(app) {
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/news", newRouter);
  app.use("/", siteRouter);
  // Default route
}

module.exports = route;
