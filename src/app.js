const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.use(morgan("combined"));

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources", "views"));

route(app);
app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
