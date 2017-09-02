const express = require("express");
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const sessionConfig = require("./sessionConfig");
const users = require("./data");
const checkAuth = require("./middlewares/checkAuth");
const indexRoutes = require("./routes/indexRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();
const port = process.env.PORT || 8000;

// Template 
app.engine("mustache",mustacheExpress());
app.set("views", "/.views");
app.set("view engine", "mustache");

//MiddleWare
app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(session(sessionConfig));
app.use(logger("dev"));


// //Routes
app.use("/", indexRoutes);
app.use("/auth", authRoutes); // /auth/signup
app.use("/user", checkAuth, userRoutes);


app.listen(port, () => {
    console.log(`Running on port ${port}!`);
  });