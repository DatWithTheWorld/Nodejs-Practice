class NewController {
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("Show news");
  }
}

module.exports = new NewController();
